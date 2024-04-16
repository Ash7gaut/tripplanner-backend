import express from 'express';

import cors from 'cors';

import V1Router from './routes/v1.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true,
  }
)
);

app.use('/v1', V1Router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}
);
