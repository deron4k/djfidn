import { Layout, Palette, Code, BarChart } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'UI/UX Дизайн',
    desc: 'Создание интуитивно понятных интерфейсов, обеспечивающих бесшовный пользовательский путь.'
  },
  {
    icon: Palette,
    title: 'Брендинг',
    desc: 'Разработка визуального языка, который эффективно транслирует ценности вашего продукта.'
  },
  {
    icon: Code,
    title: 'Веб-разработка',
    desc: 'Создание производительных сайтов с использованием самых современных технологий.'
  },
  {
    icon: BarChart,
    title: 'Стратегия',
    desc: 'Анализ данных для создания планов роста и укрепления позиций на рынке.'
  }
];

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Наши компетенции</h2>
        <p className="text-neutral-500 max-w-lg mx-auto">Мы предоставляем полный спектр услуг по дизайну и разработке для современного бизнеса.</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div key={i} className="p-10 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 text-center">
        <h3 className="text-2xl font-bold mb-4">Есть особые требования?</h3>
        <p className="text-neutral-500 mb-8">Мы всегда открыты для нестандартных проектов и коллабораций.</p>
        <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors">
          Связаться с нами
        </button>
      </div>
    </div>
  );
}
