import { Notification } from '../types';
import { mockNotifications } from '../data/mockData';
import { fetchApi } from './apiClient';

export const notificationService = {
  async getNotifications(): Promise<Notification[]> {
    try {
      return await fetchApi<Notification[]>('/notifications');
    } catch {
      return mockNotifications;
    }
  }
};
