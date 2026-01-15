
import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [showContactCloud, setShowContactCloud] = useState(false);
  const info = CONTENT[lang].personal;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 overflow-hidden">
      <div className="blob top-[-10%] left-[-10%] animate-pulse"></div>
      <div className="blob bottom-[-10%] right-[-10%] bg-indigo-500/20"></div>

      <div className="max-w-4xl text-center z-10 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full glass border border-slate-200 dark:border-white/10 text-xs font-mono text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
          {info.role}
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter">
          <span className="gradient-text">{info.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {info.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-4 relative">
          <div className="relative group">
            <button 
              onClick={() => setShowContactCloud(!showContactCloud)}
              className="px-8 py-4 glass border border-slate-200 dark:border-white/10 font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-all transform hover:-translate-y-1 shadow-lg dark:shadow-none"
            >
              {CONTENT[lang].hero.contactBtn}
            </button>
            
            {showContactCloud && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 p-6 glass border border-slate-200 dark:border-white/20 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-200 z-50">
                <div className="text-sm text-left space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-envelope text-indigo-500 dark:text-indigo-400 mt-1"></i>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-mono">Email</p>
                      <p className="text-slate-900 dark:text-white font-medium select-all">{info.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-phone text-indigo-500 dark:text-indigo-400 mt-1"></i>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-mono">{lang === 'es' ? 'Teléfono' : 'Phone'}</p>
                      <p className="text-slate-900 dark:text-white font-medium select-all">{info.phone}</p>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 glass border-r border-b border-slate-200 dark:border-white/20 rotate-45 bg-white dark:bg-slate-900"></div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-20 flex justify-center gap-10 text-3xl text-slate-400 dark:text-slate-500">
          <a href="https://github.com/Yunicaard" target="_blank" className="hover:text-indigo-500 transition-colors"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/alejandro-yunai-c%C3%A1rdenes-iglesias/" target="_blank" className="hover:text-indigo-500 transition-colors"><i className="fab fa-linkedin"></i></a>
          <a href="#" target="_blank" className="hover:text-indigo-500 transition-colors"><i className="fab fa-x-twitter"></i></a>
        </div>
      </div>
    </section>
  );
};
