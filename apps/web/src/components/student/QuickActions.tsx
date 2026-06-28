"use client";

import Link from "next/link";
import { MessageCircle, HeartHandshake } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Link 
        href="/dashboard/student/chatbot"
        className="bg-blue-50 border border-blue-100 rounded-xl p-5 hover:bg-blue-100 transition-colors flex flex-col items-center justify-center text-center group"
      >
        <div className="bg-blue-600 text-white p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
          <MessageCircle size={24} />
        </div>
        <h3 className="font-semibold text-blue-900">Hablar con Sentinel</h3>
        <p className="text-sm text-blue-700 mt-1">Chat de apoyo emocional 24/7</p>
      </Link>

      <Link 
        href="/dashboard/student/appointments"
        className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 hover:bg-emerald-100 transition-colors flex flex-col items-center justify-center text-center group"
      >
        <div className="bg-emerald-600 text-white p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
          <HeartHandshake size={24} />
        </div>
        <h3 className="font-semibold text-emerald-900">Ayuda Profesional</h3>
        <p className="text-sm text-emerald-700 mt-1">Agendar cita psicológica</p>
      </Link>
    </div>
  );
}
