import { User, Bell, Shield, LogOut } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
        <p className="text-gray-500 mt-1">Administra tu cuenta y preferencias de la plataforma.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-100">
          
          <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <User size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Perfil de Usuario</h3>
                <p className="text-sm text-gray-500">Actualiza tus datos personales y de facultad.</p>
              </div>
            </div>
            <button className="text-blue-600 font-medium text-sm hover:underline">Editar perfil</button>
          </div>

          <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 text-emerald-600 p-3 rounded-full">
                <Bell size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Notificaciones</h3>
                <p className="text-sm text-gray-500">Controla cómo te enviamos recordatorios de citas.</p>
              </div>
            </div>
            <button className="text-blue-600 font-medium text-sm hover:underline">Configurar</button>
          </div>

          <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Privacidad y Seguridad</h3>
                <p className="text-sm text-gray-500">Revisa la política de confidencialidad de datos.</p>
              </div>
            </div>
            <button className="text-blue-600 font-medium text-sm hover:underline">Ver opciones</button>
          </div>

        </div>
      </div>
    </div>
  );
}
