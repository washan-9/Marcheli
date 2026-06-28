"use client";

import { useStudentStore } from "@/store/useStudentStore";
import { Calendar, Video, Clock, CheckCircle2 } from "lucide-react";

export default function AppointmentsPage() {
  const appointments = useStudentStore((state) => state.appointments);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Citas Psicológicas</h1>
          <p className="text-gray-500 mt-1">Gestiona tus sesiones de telemedicina con nuestros especialistas.</p>
        </div>
        <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          Agendar Nueva Cita
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-semibold text-gray-800 mb-4 text-lg border-b pb-2">Tus Sesiones</h2>
        
        {appointments.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
            <p>No tienes citas programadas en este momento.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appt) => (
              <div key={appt.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors gap-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full hidden sm:block">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{appt.specialistName}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {new Date(appt.scheduledAt).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Clock size={14}/> {new Date(appt.scheduledAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full sm:w-auto">
                  {appt.status === "SCHEDULED" ? (
                    <a href={appt.meetingLink || "#"} className="flex items-center justify-center gap-2 bg-emerald-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-emerald-600 transition-colors w-full">
                      <Video size={16} /> Entrar a Sala
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                      <CheckCircle2 size={16} /> Completada
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
