
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AIAssistant } from './components/AIAssistant';
import { ProjectGallery } from './components/ProjectGallery';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="ai-assistant" className="scroll-mt-24">
          <AIAssistant />
        </section>
        
        <section id="projects" className="scroll-mt-24">
          <ProjectGallery />
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 glass">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">
                {PERSONAL_INFO.name.charAt(0)}
              </div>
              <span className="font-bold text-xl">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Diseñado y codificado con ❤️ y AI.</p>
          </div>

          <div className="flex gap-6 text-xl text-slate-400">
            <a href={PERSONAL_INFO.github} target="_blank" className="hover:text-white transition-colors"><i className="fab fa-github"></i></a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href={PERSONAL_INFO.twitter} target="_blank" className="hover:text-white transition-colors"><i className="fab fa-x-twitter"></i></a>
          </div>

          <div className="text-right hidden md:block">
            <p className="text-xs font-mono text-slate-600 mb-1">UBICACIÓN ACTUAL</p>
            <p className="text-sm font-medium">{PERSONAL_INFO.location}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
