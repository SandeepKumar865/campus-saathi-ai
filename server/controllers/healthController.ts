import { Request, Response } from 'express';
import { ApiResponse } from '../types';

export const getHealthStatus = (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    data: {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'CampusSaathi AI API',
      version: 'v1.0.0'
    }
  };
  res.status(200).json(response);
};
