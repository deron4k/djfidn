import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, User, Cpu, Newspaper, Mail, Github, Twitter, Instagram } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Главная', icon: Home },
  { path: '/works', label: 'Работы', icon: Briefcase },
  { path: '/about', label: 'Об авторе', icon: User },
  { path: '/services', label: 'Услуги', icon: Cpu },
  { path: '/news', label: 'Новости', icon: Newspaper },
  { path: '/contact', label: 'Контакты', icon: Mail },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/5 bg-[#0d0d0d] flex flex-col p-8 z-50">
      <div className="mb-12">
        <h1 className="text-2xl font-bold tracking-tighter text-white uppercase">KOKIN.</h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mt-1">Дизайн-студия</p>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                isActive 
                  ? 'bg-white/5 text-white' 
                  : 'text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.02]'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-400'} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-8 border-t border-white/5">
        <div className="flex gap-4 mb-6">
          <a href="#" className="text-neutral-600 hover:text-white transition-colors"><Twitter size={18} /></a>
          <a href="#" className="text-neutral-600 hover:text-white transition-colors"><Github size={18} /></a>
          <a href="#" className="text-neutral-600 hover:text-white transition-colors"><Instagram size={18} /></a>
        </div>
        <p className="text-[10px] text-neutral-700 uppercase tracking-widest leading-relaxed">
          © 2026 Дмитрий Кокин<br/>Ученик 11 класса
        </p>
      </div>
    </aside>
  );
}
