import { ChevronUp } from 'lucide-react';

export default function ArtifactDisplay({ imageRef, onOpen, data, lang }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
      {/* Decorative Backdrop Elements */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(197,160,89,0.08)_0%,transparent_60%)]" />
        <div className="absolute w-[70vh] h-[70vh] border border-museum-gold/10 rounded-full animate-[spin_120s_linear_infinite]" />
        <div className="absolute w-[55vh] h-[55vh] border border-museum-gold/20 rounded-full border-dashed animate-[spin_60s_linear_infinite_reverse]" />
      </div> */}

      {/* Corner Frames */}
      <div className="absolute inset-6 md:inset-12 pointer-events-none z-10 opacity-40">
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-museum-gold" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-museum-gold" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-museum-gold" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-museum-gold" />
      </div>

      <h2 className="text-3xl md:text-5xl font-serif text-museum-gold mb-8 text-center z-20 drop-shadow-lg">
        {data.name}
      </h2>

      <img 
        ref={imageRef}
        src={data.image} 
        alt={data.name}
        className="max-h-[65vh] w-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
      />
      
      <button 
        onClick={onOpen}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce cursor-pointer"
      >
        <span className="text-[10px] tracking-widest text-museum-gold uppercase font-bold">
          {lang === 'en' ? 'Discover History' : 'اكتشف التاريخ'}
        </span>
        <ChevronUp size={20} className="text-museum-gold" />
      </button>
    </div>
  );
}