"use client";

import { useStudentStore } from "@/store/useStudentStore";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function MoodSummaryChart() {
  const logs = useStudentStore((state) => state.moodLogs);
  
  // Transform data for chart: reverse to chronological order, map stress level
  const data = [...logs].reverse().map(log => {
    const date = new Date(log.createdAt);
    return {
      date: date.toLocaleDateString('es-ES', { weekday: 'short' }),
      stress: log.stressLevel
    };
  }).slice(-7); // Last 7 days

  if (data.length === 0) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center items-center h-64 text-center">
        <p className="text-gray-500 mb-2">No hay suficientes datos</p>
        <p className="text-sm text-gray-400">Registra tu ánimo diario para ver tu progreso.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
      <h3 className="font-semibold text-gray-800 mb-6">Nivel de estrés (Últimos días)</h3>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="date" tick={{fontSize: 12, fill: '#6b7280'}} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 10]} tick={{fontSize: 12, fill: '#6b7280'}} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Line 
              type="monotone" 
              dataKey="stress" 
              stroke="#2563EB" 
              strokeWidth={3}
              dot={{ fill: '#2563EB', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
