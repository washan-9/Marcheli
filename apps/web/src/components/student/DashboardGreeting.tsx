"use client";

import { useSession } from "next-auth/react";
import { useStudentStore } from "@/store/useStudentStore";

export function DashboardGreeting() {
  const { data: session } = useSession();
  const profile = useStudentStore((state) => state.profile);

  // Usa el nombre de la sesión de Google, si no está disponible usa el del mock
  const userName = session?.user?.name || profile?.name || "Estudiante";
  const firstName = userName.split(" ")[0];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          ¡Hola, {firstName}! 👋
        </h2>
        <p className="text-gray-500 mt-1">
          {profile?.faculty || "Facultad"} - Estudiante regular
        </p>
      </div>
      <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100">
        Tu espacio seguro y confidencial
      </div>
    </div>
  );
}
