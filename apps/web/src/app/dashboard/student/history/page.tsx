"use client";

import { useStudentStore } from "@/store/useStudentStore";
import { FileText, Activity } from "lucide-react";

export default function HistoryPage() {
  const logs = useStudentStore((state) => state.moodLogs);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Historial Clínico</h1>
        <p className="text-gray-500 mt-1">Revisa tu progreso emocional y el histórico de tus registros.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-semibold text-gray-800 mb-6 text-lg border-b pb-2 flex items-center gap-2">
          <Activity size={20} className="text-blue-500"/> Registros de Estado de Ánimo
        </h2>
        
        {logs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <FileText size={48} className="mx-auto text-gray-300 mb-4" />
            <p>Aún no hay registros en tu historial.</p>
          </div>
        ) : (
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {logs.map((log) => {
              const date = new Date(log.createdAt);
              return (
                <div key={log.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-xs">
                    {log.stressLevel}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-800">{log.mood}</span>
                      <span className="text-xs text-gray-500">{date.toLocaleDateString()}</span>
                    </div>
                    {log.note && <p className="text-gray-600 text-sm mt-2 bg-gray-50 p-2 rounded">{log.note}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
