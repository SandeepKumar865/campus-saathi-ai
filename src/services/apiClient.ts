/// <reference types="vite/client" />

const metaEnv = (import.meta as unknown as { env?: Record<string, string> }).env || {};
const API_BASE_URL = metaEnv.VITE_API_BASE_URL || 'http://localhost:5000/api/v1';

export interface FetchOptions extends RequestInit {
  timeoutMs?: number;
}

export async function fetchApi<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { timeoutMs = 3000, ...fetchInit } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...fetchInit,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(fetchInit.headers || {})
      }
    });

    clearTimeout(id);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    if (!json.success && json.error) {
      throw new Error(json.error.message || 'API request failed');
    }

    return json.data as T;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}
