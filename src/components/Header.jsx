import { Sun, Moon, Languages } from 'lucide-react';

export default function Header({ lang, setLang, theme, setTheme }) {
  return (
    <div className="absolute top-0 left-0 w-full p-6 z-30 flex justify-between items-center bg-linear-to-b from-black/40 to-transparent">
      <h1 className="text-[20px] tracking-[0.2em] font-bold uppercase text-museum-gold">
        {lang === 'en' ? 'The Iraqi Museum' : 'المتحف العراقي'}
      </h1>

      <div className="flex items-center gap-3">
        {/* Language Switch */}
        <button 
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 px-3 py-1 border border-museum-gold text-museum-gold rounded hover:bg-museum-gold/10 transition-colors cursor-pointer"
        >
          <Languages size={14} />
          <span className="text-xs font-bold uppercase">{lang === 'en' ? 'عربي' : 'EN'}</span>
        </button>

        {/* Theme Switch */}
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-1.5 border border-museum-gold text-museum-gold rounded hover:bg-museum-gold/10 transition-colors cursor-pointer"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </div>
    </div>
  );
}