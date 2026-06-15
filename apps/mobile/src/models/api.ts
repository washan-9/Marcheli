// Cliente HTTP del móvil hacia el orquestador (apps/api). La app es ligera:
// delega toda la lógica y persistencia al BFF. TODO: implementar fetch + auth.

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:3001";

export const api = {
  baseUrl: API_URL,
  // async get<T>(path: string): Promise<T> { ... }
  // async post<T>(path: string, body: unknown): Promise<T> { ... }
};
