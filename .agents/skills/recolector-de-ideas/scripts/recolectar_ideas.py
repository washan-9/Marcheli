import os
import re
import shutil
from datetime import datetime

# Configuración
PROJECT_ROOT = "/home/washan/Proyectos/Proyecto_Gestion"
BRAIN_DIR = os.path.join(PROJECT_ROOT, ".brain")
IDEAS_DIR = os.path.join(BRAIN_DIR, "ideas")
MANIFEST_PATH = os.path.join(BRAIN_DIR, "BRAIN_MANIFEST.md")

# Extensiones a escanear para buscar comentarios @idea
CODE_EXTENSIONS = ('.py', '.js', '.ts', '.go', '.md', '.java', '.c', '.cpp', '.css', '.html', '.sh', '.sql')
IGNORE_DIRS = {'.git', 'node_modules', '.agents', '.brain', '__pycache__', 'venv', 'dist', 'build'}

def setup_brain():
    if not os.path.exists(BRAIN_DIR):
        os.makedirs(BRAIN_DIR)
    if not os.path.exists(IDEAS_DIR):
        os.makedirs(IDEAS_DIR)
    # Limpiar ideas previas para regenerar (opcional, pero asegura limpieza)
    for f in os.listdir(IDEAS_DIR):
        os.remove(os.path.join(IDEAS_DIR, f))

def collect_idea_files():
    idea_files = []
    for root, dirs, files in os.walk(PROJECT_ROOT):
        # Ignorar directorios no deseados
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        for file in files:
            if file.endswith('.idea.md'):
                src_path = os.path.join(root, file)
                # Crear un nombre único para evitar colisiones si hay archivos con el mismo nombre en carpetas distintas
                rel_path = os.path.relpath(src_path, PROJECT_ROOT).replace(os.sep, '_')
                dest_path = os.path.join(IDEAS_DIR, rel_path)
                shutil.copy2(src_path, dest_path)
                idea_files.append({
                    'name': file,
                    'original_path': os.path.relpath(src_path, PROJECT_ROOT),
                    'brain_path': os.path.relpath(dest_path, BRAIN_DIR)
                })
    return idea_files

def collect_inline_ideas():
    inline_ideas = []
    pattern = re.compile(r'@idea:\s*(.*)', re.IGNORECASE)
    
    for root, dirs, files in os.walk(PROJECT_ROOT):
        dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
        
        for file in files:
            if file.endswith(CODE_EXTENSIONS):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        for i, line in enumerate(f, 1):
                            match = pattern.search(line)
                            if match:
                                inline_ideas.append({
                                    'content': match.group(1).strip(),
                                    'file': os.path.relpath(file_path, PROJECT_ROOT),
                                    'line': i
                                })
                except Exception as e:
                    print(f"Error leyendo {file_path}: {e}")
    return inline_ideas

def generate_manifest(idea_files, inline_ideas):
    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        f.write("# Cerebro del Proyecto: Repositorio de Ideas\n\n")
        f.write(f"Última actualización: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write("Este documento es la fuente de verdad para la IA sobre la visión, arquitectura e ideas del proyecto.\n\n")
        
        f.write("## Documentos de Ideas (.idea.md)\n")
        if not idea_files:
            f.write("No se encontraron archivos de ideas dedicados.\n\n")
        for idea in idea_files:
            f.write(f"- [{idea['name']}]({idea['brain_path']}) (Original: `{idea['original_path']}`)\n")
        
        f.write("\n## Ideas en el Código (@idea)\n")
        if not inline_ideas:
            f.write("No se encontraron etiquetas @idea en el código.\n\n")
        else:
            # Agrupar por archivo
            current_file = ""
            for idea in sorted(inline_ideas, key=lambda x: x['file']):
                if idea['file'] != current_file:
                    current_file = idea['file']
                    f.write(f"\n### `{current_file}`\n")
                f.write(f"- Línea {idea['line']}: {idea['content']}\n")

    print(f"Manifest generado en: {MANIFEST_PATH}")

if __name__ == "__main__":
    print("Iniciando recolección de ideas...")
    setup_brain()
    files = collect_idea_files()
    inlines = collect_inline_ideas()
    generate_manifest(files, inlines)
    print(f"Recolección completada. {len(files)} archivos y {len(inlines)} ideas en código encontradas.")
