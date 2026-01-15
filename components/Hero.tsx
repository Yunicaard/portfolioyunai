
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

export const Hero: React.FC = () => {
  const [showContactCloud, setShowContactCloud] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 overflow-hidden">
      <div className="blob top-[-10%] left-[-10%] animate-pulse"></div>
      <div className="blob bottom-[-10%] right-[-10%] bg-indigo-500/20"></div>

      <div className="max-w-4xl text-center z-10 flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full glass border border-white/10 text-xs font-mono text-indigo-400 uppercase tracking-widest">
          {PERSONAL_INFO.role}
        </div>
        
        <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter">
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        <div className="flex flex-wrap justify-center gap-4 relative">
          <div className="relative group">
            <button 
              onClick={() => setShowContactCloud(!showContactCloud)}
              className="px-8 py-4 glass border border-white/10 font-bold rounded-xl hover:bg-white/5 transition-all transform hover:-translate-y-1"
            >
              Contáctame
            </button>
            
            {showContactCloud && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 p-6 glass border border-white/20 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-200 z-50">
                <div className="text-sm text-left space-y-3">
                  <div className="flex items-start gap-3">
                    <i className="fas fa-envelope text-indigo-400 mt-1"></i>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-mono">Email</p>
                      <p className="text-white font-medium select-all">{PERSONAL_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fas fa-phone text-indigo-400 mt-1"></i>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-mono">Teléfono</p>
                      <p className="text-white font-medium select-all">{PERSONAL_INFO.phone}</p>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 glass border-r border-b border-white/20 rotate-45 bg-slate-900"></div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-20 flex justify-center gap-10 text-3xl text-slate-500">
          <a href={PERSONAL_INFO.github} target="_blank" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
          <a href={PERSONAL_INFO.twitter} target="_blank" className="hover:text-white transition-colors"><i className="fab fa-x-twitter"></i></a>
        </div>
      </div>
    </section>
  );
};