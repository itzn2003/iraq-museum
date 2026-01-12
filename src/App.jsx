import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import artifactsData from './data/artifacts.json';
import Header from './components/Header';
import ArtifactDisplay from './components/ArtifactDisplay';
import InfoDrawer from './components/InfoDrawer';
import SumerianBackground from './components/SumerianBackground';

function App() {
  const [lang, setLang] = useState('ar'); // Default to Arabic
  const [theme, setTheme] = useState('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [artifact, setArtifact] = useState(null);
  
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const mainRef = useRef(null);

  // 1. Initial Data Load & URL Routing
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const firstId = Object.keys(artifactsData)[0];
    const id = params.get('id') || firstId;
    
    if (artifactsData[id]) {
      setArtifact(artifactsData[id]);
    }
  }, []);

  // 2. Synchronize HTML attributes for LTR/RTL
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // 3. Info Drawer Transition (Artifact blur vs Text reveal)
  useEffect(() => {
    if (!artifact) return;
    const tl = gsap.timeline();
    if (isOpen) {
      tl.to(contentRef.current, { 
        y: 0, 
        duration: 0.7, 
        ease: "power4.out" 
      })
      .to(imageRef.current, { 
        scale: 0.85, 
        opacity: 0.2, 
        filter: "blur(12px)", 
        duration: 0.7 
      }, "<");
    } else {
      tl.to(contentRef.current, { 
        y: "100%", 
        duration: 0.5, 
        ease: "power2.in" 
      })
      .to(imageRef.current, { 
        scale: 1, 
        opacity: 1, 
        filter: "blur(0px)", 
        duration: 0.5 
      }, "<");
    }
  }, [isOpen, artifact]);

  // 4. Theme Switch Animation (Brightness/Contrast shift)
  useEffect(() => {
    if (!mainRef.current) return;
    
    gsap.fromTo(mainRef.current, 
      { filter: 'brightness(1.2) contrast(0.9)' },
      { filter: 'brightness(1) contrast(1)', duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(".ornamental-border",
      { scale: 0.99, opacity: 0.2 },
      { scale: 1, opacity: 0.4, duration: 0.8, ease: "elastic.out(1, 0.5)" }
    );
  }, [theme]);

  // 5. Language Switch Animation (Blur transition)
  useEffect(() => {
    if (!mainRef.current) return;

    gsap.fromTo(mainRef.current,
      { filter: 'blur(10px)', opacity: 0.9 },
      { filter: 'blur(0px)', opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, [lang]);

  if (!artifact) return <div className="h-screen bg-black" />;

  return (
    <main 
      ref={mainRef} 
      className={`relative h-[100dvh] w-full overflow-hidden bg-museum-dark select-none transition-colors duration-700 ${theme}`}
    >
      {/* Background Layer */}
      <SumerianBackground />
      
      {/* Visual Overlay Effects from index.css */}
      <div className="bg-grain" />
      <div className="vignette" />
      <div className="ornamental-border" />

      {/* Interface Components */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        setTheme={setTheme} 
      />
      
      <ArtifactDisplay 
        lang={lang}
        data={{ ...artifact[lang], image: artifact.image }}
        imageRef={imageRef} 
        onOpen={() => setIsOpen(true)} 
      />
      
      <InfoDrawer 
        lang={lang}
        data={artifact[lang]}
        contentRef={contentRef} 
        onClose={() => setIsOpen(false)} 
      />
    </main>
  );
}

export default App;