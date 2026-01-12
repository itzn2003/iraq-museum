import { X } from 'lucide-react';

export default function InfoDrawer({ contentRef, onClose, data, lang }) {
  const isRtl = lang === 'ar';

  return (
    <div 
      ref={contentRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="absolute inset-0 z-50 translate-y-full bg-museum-dark/98 backdrop-blur-xl p-8 flex flex-col pt-24 overflow-y-auto"
    >
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-museum-gold)_1px,_transparent_1px)] [background-size:24px_24px]" />

      <button 
        onClick={onClose} 
        className={`absolute top-8 ${isRtl ? 'left-8' : 'right-8'} p-2 border border-museum-gold/30 rounded-full cursor-pointer`}
      >
        <X className="text-museum-gold" />
      </button>

      <div className="max-w-md mx-auto w-full relative z-10">
        <span className="text-museum-gold font-mono text-xs tracking-widest uppercase block mb-2">
          {data.period}
        </span>
        <h2 className={`text-4xl font-serif mb-6 text-museum-text leading-tight ${isRtl ? 'font-bold' : ''}`}>
          {data.name}
        </h2>
        
        <div className="space-y-6 text-museum-text/85 leading-relaxed font-light text-lg">
          <p>{data.description}</p>
        </div>

        <div className="mt-12 pt-8 border-t border-museum-gold/20 flex items-center justify-between opacity-60">
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-museum-gold rounded-full" />
            <div className="w-1 h-1 bg-museum-gold rounded-full" />
            <div className="w-1 h-1 bg-museum-gold rounded-full" />
          </div>
          {/* <h3 className="text-museum-gold text-xs uppercase tracking-widest mb-2">
            {isRtl ? 'الموقع' : 'Location'}
          </h3>
          <p className="text-sm italic text-gray-400">{data.location}</p> */}
        </div>
      </div>
    </div>
  );
}