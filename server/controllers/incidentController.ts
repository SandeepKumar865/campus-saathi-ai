import { Request, Response } from 'express';
import { ApiResponse } from '../types';

const incidentsStore = [
  {
    id: 'INC-991',
    title: 'Hostel 2 Wi-Fi Outage',
    description: 'Multiple students reporting complete loss of Wi-Fi connectivity in Hostel 2 since last night.',
    location: 'Boys Hostel 2',
    firstReportedAt: '2023-10-28T09:42:00Z',
    affectedCount: 42,
    status: 'Under Investigation',
    relatedTickets: ['TKT-101', 'TKT-102', 'TKT-105']
  }
];

export const getIncidents = (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    data: incidentsStore
  };
  res.status(200).json(response);
};
