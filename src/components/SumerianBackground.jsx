import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SumerianBackground() {
  const containerRef = useRef(null);
  
  // The text from your sumerian.txt
  const text = "𐎠𒌨 𒀂𒆸𐎠𒀼𒁇𒋻𒐖𒁓 𐎠𒌨 𒀂𒆸𐎠𒀼𒁇𒋻𒐖𒁓 𒋝𒁇𒆸𒇲𒌨 𒋻𒐖𒁓 𒁀𒀼𒋻𒑚𒈦𒌨 𒔼𒑚𒁀𒁇𒐕𐎠𒐕𒈦𒌨 𒋻𒐖𒁓 𒔼𒇬𒁇𒀼𒐖𒁓𒆸𒑚悽 𒋻𒇲𒀼 𒐕𒐖 𒈦𒀂𒌨 𒀂𒐕𒁇𒁇𒔼 𒋻𒇲𒀼 𒐕𒐖 𒈦𒀂𒌨 𒀂𒐕𒁇𒁇𒔼 𒁇𒐕𐎣𒀼 𒋻𒐖𒁓 𒁓𒀼𒁇𒐕𐎏𒀼𒇲𒋻𒐖𐏓𒀼 𒇬𒁇𒀼𒋻𒔼𒑚𒇲𒀼 𒋻𒐖𒁓 𒀂𒆸𒇬𒀼 𒋻𒇲𒀼 𒐕𒐖 𒈦𒀂𒐕𒐖𒀼 𒋻𒐕يراد 𒋻𒇲𒀼 𒐕𒐖 𒈦𒀂𒐕𒐖𒀼 𒋻𒐕𒇲";

  useEffect(() => {
    const rows = gsap.utils.toArray('.sumerian-row');
    
    const ctx = gsap.context(() => {
      rows.forEach((row, i) => {
        // Alternate directions for a more dynamic look
        const direction = i % 2 === 0 ? -1 : 1;
        
        gsap.to(row, {
          xPercent: 50 * direction,
          duration: 60 + (i * 5), // Vary speeds so patterns don't repeat obviously
          repeat: -1,
          ease: "none",
          force3D: true // Forces GPU rendering for smoothness
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-museum-dark"
    >
      {/* Increased row count and used a slight rotation (-15deg) 
          to ensure edges are always covered 
      */}
      <div className="absolute -inset-[20%] flex flex-col justify-between opacity-[0.06] dark:opacity-[0.1] rotate-[-12deg]">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="sumerian-row whitespace-nowrap will-change-transform flex"
          >
            {/* Triple the text to ensure no gaps ever appear during high-speed scrolls or resizes */}
            <span className="text-museum-gold text-5xl md:text-7xl font-serif tracking-[1.5em] px-4">
              {text} {text} {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}