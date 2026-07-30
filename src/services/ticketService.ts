import { Ticket } from '../types';
import { mockTickets } from '../data/mockData';
import { fetchApi } from './apiClient';

export const ticketService = {
  async getTickets(): Promise<Ticket[]> {
    try {
      return await fetchApi<Ticket[]>('/tickets');
    } catch {
      // Fallback to mock tickets if API is unconfigured or unreachable
      return mockTickets;
    }
  },

  async getTicketById(id: string): Promise<Ticket | undefined> {
    try {
      return await fetchApi<Ticket>(`/tickets/${id}`);
    } catch {
      return mockTickets.find(t => t.id === id);
    }
  },

  async createTicket(payload: Partial<Ticket>): Promise<Ticket> {
    try {
      return await fetchApi<Ticket>('/tickets', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
    } catch {
      const newMockTicket: Ticket = {
        id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
        title: payload.title || 'Campus Request',
        description: payload.description || '',
        category: payload.category || 'Other',
        studentId: 'stu_123',
        studentName: 'Rahul Sharma',
        department: payload.department || 'Student Welfare',
        priority: payload.priority || 'Normal',
        status: 'Open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      return newMockTicket;
    }
  }
};
