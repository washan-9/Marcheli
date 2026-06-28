import { MessageCircle, Send } from "lucide-react";

export default function ChatbotPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-120px)] max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
        <MessageCircle size={24} />
        <div>
          <h2 className="font-bold text-lg">Sentinel IA</h2>
          <p className="text-blue-100 text-sm">Tu asistente de bienestar 24/7</p>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm max-w-[80%] self-start border border-gray-100">
          <p className="text-gray-800">¡Hola! Soy Sentinel, la IA de apoyo emocional de Marcheli. ¿Cómo te sientes hoy y en qué te puedo ayudar?</p>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 relative">
          <input 
            type="text" 
            placeholder="Escribe tu mensaje aquí..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
