import { DashboardGreeting } from "@/components/student/DashboardGreeting";
import { MoodSummaryChart } from "@/components/student/MoodSummaryChart";
import { NextAppointment } from "@/components/student/NextAppointment";
import { QuickActions } from "@/components/student/QuickActions";

export default function StudentDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <DashboardGreeting />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MoodSummaryChart />
        </div>
        <div className="lg:col-span-1">
          <NextAppointment />
        </div>
      </div>
      
      <div className="mt-2">
        <h3 className="font-semibold text-gray-800 mb-4">Acciones Rápidas</h3>
        <QuickActions />
      </div>
    </div>
  );
}
