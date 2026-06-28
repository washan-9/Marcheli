import { z } from "zod";

export type Mood = "MUY_MAL" | "MAL" | "REGULAR" | "BIEN" | "MUY_BIEN";

export interface MoodLog {
  id: string;
  mood: Mood;
  stressLevel: number; // 1-10
  note?: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  specialistName: string;
  scheduledAt: string;
  status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
  meetingLink?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  faculty: string;
  studentCode: string;
}

export const moodLogSchema = z.object({
  mood: z.enum(["MUY_MAL", "MAL", "REGULAR", "BIEN", "MUY_BIEN"], {
    required_error: "Selecciona tu estado de ánimo",
  }),
  stressLevel: z.number().min(1).max(10),
  note: z.string().optional(),
});

export type MoodLogFormData = z.infer<typeof moodLogSchema>;
