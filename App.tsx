
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AIAssistant } from './components/AIAssistant';
import { ProjectGallery } from './components/ProjectGallery';
import { Language } from './types';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('lang') as Language;
    return saved || 'es';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  return (
    <div className="min-h-screen">
      <Navbar 
        onToggleTheme={toggleTheme} 
        isDark={isDark} 
        onToggleLang={toggleLang} 
        lang={lang} 
      />
      
      <main>
        <Hero lang={lang} />
        
        <section id="ai-assistant" className="scroll-mt-24">
          <AIAssistant lang={lang} />
        </section>
        
        <section id="projects" className="scroll-mt-24">
          <ProjectGallery lang={lang} />
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-200 dark:border-white/5 glass transition-all">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
                Y
              </div>
              <span className="font-bold text-xl">Yunai Cárdenes</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm italic">
              © {new Date().getFullYear()} {lang === 'es' ? 'Programado con pasión por Yunai.' : 'Coded with passion by Yunai.'}
            </p>
          </div>

          <div className="flex gap-6 text-xl text-slate-400 dark:text-slate-500">
            <a href="https://github.com/Yunicaard" target="_blank" className="hover:text-indigo-500 transition-colors"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/alejandro-yunai-c%C3%A1rdenes-iglesias/" target="_blank" className="hover:text-indigo-500 transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank" className="hover:text-indigo-500 transition-colors"><i className="fab fa-x-twitter"></i></a>
          </div>

          <div className="text-right hidden md:block">
            <p className="text-[10px] font-mono text-slate-500 uppercase mb-1 tracking-widest">
              {lang === 'es' ? 'Residencia Actual' : 'Current Residence'}
            </p>
            <p className="text-sm font-medium">{lang === 'es' ? 'Gran Canaria, España' : 'Gran Canaria, Spain'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
