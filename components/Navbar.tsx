
import React from 'react';
import { PERSONAL_INFO } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/10 m-4 rounded-2xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">
          {PERSONAL_INFO.name.charAt(0)}
        </div>
        <span className="font-bold text-xl tracking-tight hidden sm:inline">{PERSONAL_INFO.name}</span>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="#projects" className="text-sm font-medium hover:text-indigo-400 transition-colors">Proyectos</a>
        <a href="#ai-assistant" className="text-sm font-medium px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all">
          Habla con mi IA
        </a>
      </div>
    </nav>
  );
};
