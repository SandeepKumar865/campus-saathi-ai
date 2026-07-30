import { CampusIncident } from '../types';
import { mockIncidents } from '../data/mockData';
import { fetchApi } from './apiClient';

export const incidentService = {
  async getIncidents(): Promise<CampusIncident[]> {
    try {
      return await fetchApi<CampusIncident[]>('/incidents');
    } catch {
      return mockIncidents;
    }
  }
};
