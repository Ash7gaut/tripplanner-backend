import express from 'express';

const router = express.Router();

import ItineraryRouter from './v1/itinerary.js';
import MistralAPIRouter from './v1/mistral.js';

router.use('/itinerary', ItineraryRouter);
router.use('/mistral', MistralAPIRouter);

export default router;
