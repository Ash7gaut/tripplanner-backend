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


router.post('/', async (req, res) => {
  try {
    const itinerary = ItineraryValidator.parse(req.body);
    const createdItinerary = await prisma.itinerary.create({
      data: itinerary,
    });
    res.status(201).json(createdItinerary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;