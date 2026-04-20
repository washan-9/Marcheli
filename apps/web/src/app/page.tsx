"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-950 text-white">
      <div className="z-10 w-full max-w-md items-center justify-center font-mono text-sm flex flex-col gap-8 bg-slate-900 p-12 rounded-2xl border border-slate-800 shadow-2xl">
        <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Marcheli
        </h1>
        
        <p className="text-slate-400 text-center">
          Sistema de Gestión Clínica y Soporte Emocional
        </p>

        {!session ? (
          <button
            onClick={() => signIn("google")}
            className="w-full py-3 px-6 rounded-lg bg-white text-black font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
          >
            Iniciar sesión con Google
          </button>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-emerald-400 font-medium">Bienvenido, {session.user?.name}</p>
            <p className="text-slate-500 text-xs">Rol: {(session.user as any).role}</p>
            <button
              onClick={() => signOut()}
              className="mt-4 text-slate-400 hover:text-white transition-colors underline"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
