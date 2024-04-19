import { app } from './app.js';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});