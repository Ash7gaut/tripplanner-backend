import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import ItineraryValidator from '../../validators/ItineraryValidator.js';

dotenv.config();

const router = express.Router();
const prisma = new PrismaClient();

// DOTENV
const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;
const prePrompt = process.env.PREPROMPT;

// ROUTES

router.get("/", async (req, res) => {
  const itineraries = await prisma.itinerary.findMany({
    orderBy: {
      updatedAt: 'desc',
    },
    take: 4,
  });

  res.json(itineraries);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const itinerary = await prisma.itinerary.findUnique({
    where: {
      id: id,
    },
  });

  if (!itinerary) {
    return res.status(404).json({ message: "Itinerary not found" });
  }

  res.json(itinerary);
});


router.post("/", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'The field "prompt" is required.' });
  }

  try {
    const mistralResponse = await fetch(
      process.env.MISTRAL_AI_CHAT,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          model: process.env.MISTRAL_AI_MODEL,
          messages: [{ role: "user", content: prePrompt + " " + prompt }],
        }),
      }
    );

    const mistralData = await mistralResponse.json();

    console.log(mistralData.choices[0].message.content);

    const itinerary = await prisma.itinerary.create({
      data: {
        prompt,
        answer: JSON.parse(mistralData.choices[0].message.content)
      },
    });

    res.status(201).json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { prompt } = ItineraryValidator.parse(req.body);

  try {
    const mistralResponse = await fetch(
      "https://api.mistral.ai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mistral-small-latest",
          messages: [{ role: "user", content: prePrompt + " " + prompt }],
        }),
      }
    );

    const mistralData = await mistralResponse.json();

    console.log(mistralData.choices[0].message.content);

    const itinerary = await prisma.itinerary.update({
      where: {
        id: id,
      },
      data: {
        prompt,
        answer: JSON.parse(mistralData.choices[0].message.content),
        updatedAt: new Date(),
      },
    });

    res.json(itinerary);
  } catch (error) {
    console.log(error);
    res.status(500).json({});
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const itinerary = await prisma.itinerary.delete({
    where: {
      id: id,
    },
  });

  res.json(itinerary);
});

export default router;