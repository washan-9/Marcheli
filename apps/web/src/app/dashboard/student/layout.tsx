"use client";

import { Sidebar } from "@/components/student/Sidebar";
import { useStudentStore } from "@/store/useStudentStore";
import { useEffect } from "react";

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initializeMockData = useStudentStore((state) => state.initializeMockData);

  useEffect(() => {
    // Inicializar datos mock al montar el layout
    initializeMockData();
  }, [initializeMockData]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 w-full mt-16 md:mt-0 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
