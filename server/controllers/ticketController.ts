import { Request, Response } from 'express';
import { ApiResponse } from '../types';

// Mock DB store for initial fallback API endpoints
let ticketsStore = [
  {
    id: 'SCH-1024',
    title: 'Scholarship Payment Not Received',
    description: 'My UP State Scholarship application was approved on the portal but the amount has not been credited to my bank account yet. It has been over 2 weeks.',
    category: 'Scholarship',
    studentId: 'stu_123',
    studentName: 'Rahul Sharma',
    department: 'Scholarship Cell',
    priority: 'Normal',
    status: 'In Review',
    createdAt: '2023-10-25T10:30:00Z',
    updatedAt: '2023-10-26T14:15:00Z',
    aiClassification: {
      category: 'Scholarship',
      priority: 'Normal',
      reason: 'Standard payment delay inquiry.'
    }
  },
  {
    id: 'EXM-0987',
    title: 'Correction in Marksheet',
    description: 'My name is misspelled in the 4th semester marksheet. It is printed as "Rahul Sharrma" instead of "Rahul Sharma". Please correct it.',
    category: 'Examination',
    studentId: 'stu_123',
    studentName: 'Rahul Sharma',
    department: 'Examination Department',
    priority: 'High',
    status: 'Action Required',
    createdAt: '2023-10-20T09:00:00Z',
    updatedAt: '2023-10-22T11:00:00Z',
    aiClassification: {
      category: 'Examination',
      priority: 'High',
      reason: 'Name correction in official document requires prompt action.'
    }
  }
];

export const getTickets = (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    data: ticketsStore
  };
  res.status(200).json(response);
};

export const getTicketById = (req: Request, res: Response) => {
  const { id } = req.params;
  const ticket = ticketsStore.find(t => t.id === id);
  
  if (!ticket) {
    const response: ApiResponse = {
      success: false,
      error: { message: 'Ticket not found', code: 'NOT_FOUND' }
    };
    return res.status(404).json(response);
  }

  res.status(200).json({ success: true, data: ticket });
};

export const createTicket = (req: Request, res: Response) => {
  const { title, description, category, priority, department } = req.body;
  
  const newTicket = {
    id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
    title: title || 'New Campus Request',
    description: description || '',
    category: category || 'Other',
    studentId: 'stu_123',
    studentName: 'Rahul Sharma',
    department: department || 'Student Welfare',
    priority: priority || 'Normal',
    status: 'Submitted',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  ticketsStore.unshift(newTicket as any);

  const response: ApiResponse = {
    success: true,
    data: newTicket
  };
  res.status(201).json(response);
};
