import { create } from "zustand";
import { StudentProfile, MoodLog, Appointment } from "../types/student";

interface StudentState {
  profile: StudentProfile | null;
  moodLogs: MoodLog[];
  appointments: Appointment[];
  
  // Actions
  addMoodLog: (log: Omit<MoodLog, "id" | "createdAt">) => void;
  initializeMockData: () => void;
}

export const useStudentStore = create<StudentState>((set) => ({
  profile: null,
  moodLogs: [],
  appointments: [],
  
  addMoodLog: (log) => set((state) => ({
    moodLogs: [
      {
        ...log,
        id: Math.random().toString(36).substring(7),
        createdAt: new Date().toISOString()
      },
      ...state.moodLogs
    ]
  })),

  initializeMockData: () => set({
    profile: {
      id: "student-123",
      name: "Juan Pérez",
      faculty: "Ingeniería de Sistemas",
      studentCode: "20231234"
    },
    moodLogs: [
      {
        id: "mood-1",
        mood: "BIEN",
        stressLevel: 4,
        note: "Día tranquilo, terminé mis tareas a tiempo.",
        createdAt: new Date(Date.now() - 86400000).toISOString() // Ayer
      },
      {
        id: "mood-2",
        mood: "REGULAR",
        stressLevel: 6,
        note: "Un poco estresado por los exámenes.",
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString() // Hace 2 días
      },
      {
        id: "mood-3",
        mood: "MUY_BIEN",
        stressLevel: 2,
        note: "Excelente día de clases.",
        createdAt: new Date(Date.now() - 86400000 * 3).toISOString() // Hace 3 días
      }
    ],
    appointments: [
      {
        id: "app-1",
        specialistName: "Dra. María Gonzales",
        scheduledAt: new Date(Date.now() + 86400000 * 2).toISOString(), // Pasado mañana
        status: "SCHEDULED",
        meetingLink: "https://meet.jit.si/marcheli-session-123"
      }
    ]
  })
}));
