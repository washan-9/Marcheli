import { MoodTrackingForm } from "@/components/student/MoodTrackingForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MoodTrackingPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div>
        <Link 
          href="/dashboard/student" 
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mb-4 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Volver al Inicio
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Seguimiento Emocional</h1>
        <p className="text-gray-500 mt-1">Registra cómo te sientes hoy para llevar un control de tu bienestar.</p>
      </div>

      <MoodTrackingForm />
    </div>
  );
}
