export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Profile"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center p-4 text-center">
            <p className="text-[10px] uppercase tracking-tighter leading-tight text-neutral-400">Дмитрий Кокин, 11 класс</p>
          </div>
        </div>

        <div>
          <h2 className="text-5xl font-bold mb-8 leading-tight">Мы верим в силу <span className="text-neutral-500 italic">меньшего</span>.</h2>
          <div className="space-y-6 text-neutral-400 leading-relaxed">
            <p>
              Меня зовут Дмитрий Кокин, я ученик 11 класса. Этот проект — моя попытка переосмыслить современный веб-интерфейс, убрав всё лишнее и оставив только суть.
            </p>
            <p>
              В мире, переполненном информацией, чистота и порядок становятся настоящей ценностью. Я изучаю принципы швейцарской школы дизайна и применяю их в своих цифровых работах.
            </p>
            <p>
              Моя цель — создавать продукты, которые не просто выглядят красиво, но и работают безупречно. Каждая деталь здесь продумана и обоснована.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
            <div>
              <h4 className="text-white font-bold mb-1">11 класс</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-widest">Текущее обучение</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">2026</h4>
              <p className="text-xs text-neutral-500 uppercase tracking-widest">Год выпуска</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
