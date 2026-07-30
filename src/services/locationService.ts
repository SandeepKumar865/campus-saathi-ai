import { CampusLocation } from '../types';
import { mockLocations } from '../data/mockData';
import { fetchApi } from './apiClient';

export const locationService = {
  async getLocations(query?: string): Promise<CampusLocation[]> {
    try {
      const endpoint = query ? `/locations?query=${encodeURIComponent(query)}` : '/locations';
      return await fetchApi<CampusLocation[]>(endpoint);
    } catch {
      if (!query) return mockLocations;
      const q = query.toLowerCase();
      return mockLocations.filter(
        loc => loc.name.toLowerCase().includes(q) || loc.building.toLowerCase().includes(q)
      );
    }
  },

  async getLocationById(id: string): Promise<CampusLocation | undefined> {
    try {
      return await fetchApi<CampusLocation>(`/locations/${id}`);
    } catch {
      return mockLocations.find(l => l.id === id);
    }
  }
};
