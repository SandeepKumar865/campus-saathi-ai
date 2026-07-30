import { User } from '../types';
import { currentUser } from '../data/mockData';
import { fetchApi } from './apiClient';

export const authService = {
  async getCurrentUser(): Promise<User> {
    try {
      return await fetchApi<User>('/profile/me');
    } catch {
      // Fallback to mock data if API is unconfigured or unreachable
      return currentUser;
    }
  }
};
