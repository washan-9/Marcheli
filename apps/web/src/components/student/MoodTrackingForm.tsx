"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStudentStore } from "@/store/useStudentStore";
import { moodLogSchema, MoodLogFormData, Mood } from "@/types/student";
import { Smile, Frown, Meh, SmilePlus, Frown as Sad } from "lucide-react";
import clsx from "clsx";

const MOODS: { value: Mood; label: string; icon: any; color: string }[] = [
  { value: "MUY_MAL", label: "Muy Mal", icon: Sad, color: "text-red-500 bg-red-50 hover:bg-red-100 border-red-200" },
  { value: "MAL", label: "Mal", icon: Frown, color: "text-orange-500 bg-orange-50 hover:bg-orange-100 border-orange-200" },
  { value: "REGULAR", label: "Regular", icon: Meh, color: "text-yellow-600 bg-yellow-50 hover:bg-yellow-100 border-yellow-200" },
  { value: "BIEN", label: "Bien", icon: Smile, color: "text-emerald-500 bg-emerald-50 hover:bg-emerald-100 border-emerald-200" },
  { value: "MUY_BIEN", label: "Muy Bien", icon: SmilePlus, color: "text-blue-500 bg-blue-50 hover:bg-blue-100 border-blue-200" }
];

export function MoodTrackingForm() {
  const router = useRouter();
  const addMoodLog = useStudentStore((state) => state.addMoodLog);
  
  const [formData, setFormData] = useState<Partial<MoodLogFormData>>({
    stressLevel: 5
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const validation = moodLogSchema.safeParse(formData);
    
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      setIsSubmitting(false);
      return;
    }

    // Simulate API delay
    setTimeout(() => {
      addMoodLog(validation.data as any);
      setIsSubmitting(false);
      router.push("/dashboard/student");
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">¿Cómo te sientes hoy?</h2>
        <p className="text-gray-500">Tu registro es privado y nos ayuda a brindarte mejor apoyo.</p>
      </div>

      <div className="space-y-8">
        {/* Mood Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
            Estado de ánimo general
          </label>
          <div className="flex flex-wrap justify-center gap-4">
            {MOODS.map((m) => {
              const Icon = m.icon;
              const isSelected = formData.mood === m.value;
              return (
                <button
                  key={m.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, mood: m.value })}
                  className={clsx(
                    "flex flex-col items-center p-4 rounded-xl border-2 transition-all w-24",
                    m.color,
                    isSelected ? "border-current scale-110 shadow-md" : "border-transparent opacity-70 grayscale hover:grayscale-0 hover:opacity-100"
                  )}
                >
                  <Icon size={32} className="mb-2" />
                  <span className="text-xs font-semibold">{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stress Scale */}
        <div>
          <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
            <span>Nivel de estrés</span>
            <span className="text-blue-600 font-bold">{formData.stressLevel}/10</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={formData.stressLevel}
            onChange={(e) => setFormData({ ...formData, stressLevel: Number(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Muy relajado</span>
            <span>Extremadamente estresado</span>
          </div>
        </div>

        {/* Optional Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Quieres añadir algo más? (Opcional)
          </label>
          <textarea
            rows={3}
            value={formData.note || ""}
            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
            placeholder="¿Qué ha estado ocupando tu mente hoy?"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Guardando..." : "Guardar Registro"}
        </button>
      </div>
    </form>
  );
}
