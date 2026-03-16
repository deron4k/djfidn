import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop',
    title: 'Минималистичные интерьеры',
    desc: 'Исследование красоты пустого пространства.'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    title: 'Городская архитектура',
    desc: 'Монолитные структуры в самом сердце мегаполиса.'
  },
  {
    url: 'https://images.unsplash.com/photo-1518005020481-a68515605041?q=80&w=1964&auto=format&fit=crop',
    title: 'Абстрактная геометрия',
    desc: 'Поиск паттернов в повседневных вещах.'
  }
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="max-w-5xl mx-auto py-12">
      <section className="mb-20">
        <h2 className="text-6xl font-bold mb-6 leading-tight">
          Мы создаем <span className="text-neutral-500 italic font-serif">цифровой опыт</span>, который вдохновляет.
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
          Проект выполнен учеником 11 класса Кокиным Дмитрием. Это исследование современного веб-дизайна через призму минимализма и функциональности.
        </p>
      </section>

      <section className="relative group">
        <div className="aspect-[16/7] overflow-hidden rounded-2xl bg-neutral-900">
          <img 
            src={slides[current].url} 
            alt={slides[current].title}
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
            <h3 className="text-3xl font-bold mb-2">{slides[current].title}</h3>
            <p className="text-neutral-400">{slides[current].desc}</p>
          </div>
        </div>

        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-300 rounded-full ${current === i ? 'w-8 bg-white' : 'w-2 bg-neutral-800'}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
