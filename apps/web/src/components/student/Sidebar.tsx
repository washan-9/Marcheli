"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  SmilePlus,
  MessageCircle,
  Calendar,
  FileText,
  HeartPulse,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { signOut } from "next-auth/react";
import clsx from "clsx";

const navItems = [
  { href: "/dashboard/student", label: "Inicio", icon: LayoutDashboard },
  { href: "/dashboard/student/mood", label: "Seguimiento Emocional", icon: SmilePlus },
  { href: "/dashboard/student/chat", label: "Chatbot de Apoyo", icon: MessageCircle },
  { href: "/dashboard/student/appointments", label: "Citas Psicológicas", icon: Calendar },
  { href: "/dashboard/student/history", label: "Historial Clínico", icon: FileText },
  { href: "/dashboard/student/resources", label: "Recursos de Bienestar", icon: HeartPulse },
  { href: "/dashboard/student/settings", label: "Configuración", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-4 fixed top-0 left-0 z-50 bg-white w-full border-b flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">Marcheli</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-gray-100 rounded-md">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto flex flex-col",
          isOpen ? "translate-x-0 pt-16 md:pt-0" : "-translate-x-full"
        )}
      >
        <div className="hidden md:flex items-center justify-center h-16 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600">Marcheli</h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "flex items-center px-4 py-3 rounded-lg transition-colors duration-200",
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="mr-3" size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center w-full px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
          >
            <LogOut className="mr-3" size={20} />
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
