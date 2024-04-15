import zod from 'zod';

const ItineraryValidator = zod.object({
  Prompt: zod.string().min(1).max(255),
  Answer: zod.string().min(1).max(900),
  CreatedAt: zod.string().datetime().optional(),
});

export default ItineraryValidator;