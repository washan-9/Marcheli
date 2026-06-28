import { BookOpen, Headphones, PlayCircle, ExternalLink } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    { title: "Técnica de Respiración 4-7-8", category: "Meditación", icon: Headphones, color: "text-purple-500 bg-purple-50" },
    { title: "Manejando la ansiedad académica", category: "Artículo", icon: BookOpen, color: "text-blue-500 bg-blue-50" },
    { title: "Pausas activas de 5 minutos", category: "Video", icon: PlayCircle, color: "text-red-500 bg-red-50" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Recursos de Bienestar</h1>
        <p className="text-gray-500 mt-1">Material curado por nuestros especialistas para tu cuidado personal.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, i) => {
          const Icon = res.icon;
          return (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${res.color}`}>
                <Icon size={24} />
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{res.category}</span>
              <h3 className="font-semibold text-gray-800 mb-4 flex-1">{res.title}</h3>
              <div className="flex items-center text-sm font-medium text-blue-600 mt-auto">
                Ver contenido <ExternalLink size={14} className="ml-1" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
