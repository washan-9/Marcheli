// Tipos de dominio del lado del cliente (capa Model).
// Reflejan las entidades expuestas por el orquestador (apps/api). TODO: ampliar.

export type Mood = "MUY_MAL" | "MAL" | "REGULAR" | "BIEN" | "MUY_BIEN";

export interface MoodEntry {
  mood: Mood;
  note?: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  scheduledAt: string;
  specialistName: string;
  status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
  meetingLink?: string;
}

export interface ChatMessage {
  sender: "USER" | "BOT";
  content: string;
  timestamp: string;
}
