"use client";

import { useStudentStore } from "@/store/useStudentStore";
import { Calendar, Video, Clock } from "lucide-react";
import Link from "next/link";

export function NextAppointment() {
  const appointments = useStudentStore((state) => state.appointments);
  const nextAppt = appointments.find(a => a.status === "SCHEDULED");

  if (!nextAppt) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full flex flex-col justify-center items-center text-center">
        <Calendar className="text-gray-300 mb-3" size={32} />
        <h3 className="text-gray-800 font-medium">No hay citas programadas</h3>
        <p className="text-gray-500 text-sm mt-1 mb-4">Puedes agendar una sesión si necesitas apoyo.</p>
        <Link href="/dashboard/student/appointments" className="text-blue-600 font-medium text-sm hover:underline">
          Agendar cita
        </Link>
      </div>
    );
  }

  const date = new Date(nextAppt.scheduledAt);

  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 shadow-sm text-white h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-white/20 p-2 rounded-lg">
            <Calendar size={20} />
          </div>
          <h3 className="font-semibold text-lg">Próxima Sesión</h3>
        </div>
        
        <p className="font-medium text-xl mb-1">{nextAppt.specialistName}</p>
        
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2 text-green-50 text-sm">
            <Calendar size={16} />
            <span>{date.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
          </div>
          <div className="flex items-center gap-2 text-green-50 text-sm">
            <Clock size={16} />
            <span>{date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        {nextAppt.meetingLink ? (
          <a 
            href={nextAppt.meetingLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-white text-green-700 py-2.5 rounded-lg font-medium transition-colors hover:bg-green-50"
          >
            <Video size={18} />
            Unirse a videollamada
          </a>
        ) : (
          <button disabled className="flex items-center justify-center gap-2 w-full bg-white/20 text-white py-2.5 rounded-lg font-medium cursor-not-allowed">
            <Video size={18} />
            Enlace pendiente
          </button>
        )}
      </div>
    </div>
  );
}
