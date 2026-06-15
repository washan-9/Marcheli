// Cliente HTTP del panel web hacia el orquestador (apps/api).
// Regla de arquitectura: el dashboard NO accede a la base de datos directamente;
// todos los datos clínicos pasan por el BFF. (@marcheli/database se usa solo
// para la sesión de NextAuth vía @marcheli/auth.)
// TODO: implementar fetch con manejo de sesión/errores.

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export const apiClient = {
  baseUrl: API_URL,
  // async get<T>(path: string): Promise<T> { ... }
  // async post<T>(path: string, body: unknown): Promise<T> { ... }
};
