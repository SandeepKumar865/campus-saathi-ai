import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes/api';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Headers middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// JSON Body Parser Middleware
app.use(express.json());

// Mount API v1 Routes
app.use('/api/v1', apiRouter);

// Centralized Error Handling Middleware
app.use(errorHandler);

// Start Express Server
app.listen(PORT, () => {
  console.log(`[CAMPUSSAATHI SERVER] Express Backend running on http://localhost:${PORT}`);
  console.log(`[CAMPUSSAATHI SERVER] Health endpoint available at http://localhost:${PORT}/api/v1/health`);
});
