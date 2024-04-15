import express from 'express';
import { PrismaClient } from '@prisma/client';
import ItineraryValidator from '../../validators/ItineraryValidator.js';

const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const itineraries = await prisma.itinerary.findMany();
  res.json(itineraries);
});

router.get('/:id', async (req, res) => {

  const { id } = req.params;
  const itinerary = await prisma.itinerary.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (itinerary) {
    res.json(itinerary);
  }
});


router.post("/", async (req, res) => {
  const { Prompt, Answer, createdAt, updatedAt } =
    ItineraryValidator.parse(req.body);

  const itinerary = await prisma.itinerary.create({
    data: {
      Prompt,
      Answer,
      createdAt,
      updatedAt,
    },
  });

  res.status(201).json(itinerary);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { Prompt, Answer } = ItineraryValidator.parse(req.body);

  const itinerary = await prisma.itinerary.update({
    where: {
      id: id,
    },
    data: {
      Prompt,
      Answer,
      UpdatedAt: new Date(),
    },
  });

  res.json(itinerary);
});

export default router;