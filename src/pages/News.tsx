const posts = [
  {
    date: '14 Марта, 2026',
    title: 'Будущее минимализма в веб-дизайне',
    excerpt: 'Как новые технологии меняют наше представление о простоте в цифровую эпоху.',
    category: 'Дизайн'
  },
  {
    date: '08 Марта, 2026',
    title: 'Почему типографика важнее, чем вы думаете',
    excerpt: 'Исследование психологического влияния выбора шрифтов на восприятие бренда.',
    category: 'Брендинг'
  },
  {
    date: '24 Февраля, 2026',
    title: 'Оптимизация производительности портфолио',
    excerpt: 'Технические стратегии сохранения скорости без ущерба для визуального качества.',
    category: 'Технологии'
  },
  {
    date: '15 Февраля, 2026',
    title: 'Дмитрий Кокин представляет новый проект',
    excerpt: 'Ученик 11 класса завершил работу над концептуальным сайтом в темных тонах.',
    category: 'Новости'
  }
];

export default function News() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Последние обновления</h2>
        <p className="text-neutral-500">Инсайты, новости и мысли нашей творческой команды.</p>
      </div>

      <div className="space-y-12">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer pb-12 border-b border-white/5 last:border-0">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4 items-center">
                <span className="text-[10px] uppercase tracking-widest text-neutral-600">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-800" />
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">{post.category}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-neutral-400 transition-colors">{post.title}</h3>
            <p className="text-neutral-500 leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Читать статью 
              <span className="text-lg">→</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
