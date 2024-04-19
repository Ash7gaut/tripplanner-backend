import zod from 'zod';

const ItineraryValidator = zod.object({
  prompt: zod.string().min(1),
  answer: zod.string().min(1).optional(),
  createdAt: zod.string().datetime().optional(),
  updatedAt: zod.string().datetime().optional(),
});

export default ItineraryValidator;