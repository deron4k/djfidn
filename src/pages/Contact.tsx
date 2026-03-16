import { Mail, Phone, MapPin, Twitter, Github, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-5 gap-20">
        <div className="col-span-2">
          <h2 className="text-5xl font-bold mb-8">Давайте создадим что-то <span className="text-neutral-500 italic">невероятное</span>.</h2>
          <p className="text-neutral-400 mb-12 leading-relaxed">
            Готовы начать свой следующий проект? Я помогу воплотить ваше видение в жизнь с точностью и стилем.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600">Email</p>
                <p className="text-sm font-medium">dkokin50@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600">Адрес</p>
                <p className="text-sm font-medium">г. Краснокамск, Гимназия №5</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-6">Соцсети</p>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <form className="space-y-6 p-10 rounded-3xl bg-[#0d0d0d] border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Полное имя</label>
                <input 
                  type="text" 
                  placeholder="Иван Иванов"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Email адрес</label>
                <input 
                  type="email" 
                  placeholder="ivan@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Тема</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors appearance-none">
                <option>Новый проект</option>
                <option>Сотрудничество</option>
                <option>Вопрос</option>
                <option>Другое</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 ml-1">Сообщение</label>
              <textarea 
                rows={5}
                placeholder="Расскажите о вашем проекте..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors resize-none"
              />
            </div>
            <button className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-colors">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
