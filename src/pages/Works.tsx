const projects = [
  { id: 1, title: 'Эфирный брендинг', category: 'Айдентика', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop' },
  { id: 2, title: 'Приложение Monolith', category: 'UI/UX', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop' },
  { id: 3, title: 'Журнал Void', category: 'Редакция', img: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Тихие пространства', category: 'Фотография', img: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop' },
  { id: 5, title: 'Линейное движение', category: 'Анимация', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, title: 'Мебель Onyx', category: 'Продукт', img: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1974&auto=format&fit=crop' },
];

export default function Works() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Избранные работы</h2>
        <p className="text-neutral-500 max-w-lg">Коллекция проектов, определяющих наш подход к минимализму и функциональному дизайну.</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900 mb-4">
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-lg font-medium group-hover:text-white transition-colors">{project.title}</h3>
                <p className="text-sm text-neutral-500">{project.category}</p>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-700">0{project.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
