import express from 'express';

const router = express.Router();

import ItineraryRouter from './v1/itinerary.js';

router.use('/itinerary', ItineraryRouter);

export default router;
