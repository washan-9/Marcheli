// Cliente HTTP hacia el microservicio de IA (apps/sentinel, FastAPI).
// Solo el orquestador (apps/api) habla con Sentinel; nunca el cliente final.
// TODO: implementar las llamadas reales (chat, detección de riesgo, resumen).

const SENTINEL_URL = process.env.SENTINEL_URL ?? "http://localhost:8000";

export const sentinelClient = {
  baseUrl: SENTINEL_URL,
  // async chat(payload) { ... }
  // async detectRisk(payload) { ... }
  // async summarize(payload) { ... }
};
