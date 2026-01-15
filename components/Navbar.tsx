
import React from 'react';
import { CONTENT } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  onToggleTheme: () => void;
  isDark: boolean;
  onToggleLang: () => void;
  lang: Language;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, isDark, onToggleLang, lang }) => {
  const t = CONTENT[lang].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass border-b border-slate-200 dark:border-white/10 m-4 rounded-2xl transition-all shadow-xl">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
          Y
        </div>
        <span className="font-bold text-xl tracking-tight hidden sm:inline">Yunai Cárdenes</span>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <a href="#projects" className="text-sm font-medium hover:text-indigo-500 transition-colors hidden xs:block">{t.projects}</a>
        <a href="#ai-assistant" className="text-sm font-medium px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full transition-all shadow-md shadow-indigo-600/20">
          {t.assistant}
        </a>
        
        <div className="flex items-center gap-1 sm:gap-2 ml-2">
          {/* Language Toggle */}
          <button 
            onClick={onToggleLang}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all hover:scale-110 active:scale-95 border border-slate-200 dark:border-slate-700 font-bold text-xs"
            title={lang === 'es' ? "Switch to English" : "Cambiar a Español"}
          >
            {lang.toUpperCase()}
          </button>

          {/* Theme Toggle Button */}
          <button 
            onClick={onToggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 transition-all hover:scale-110 active:scale-95 border border-slate-200 dark:border-slate-700"
            title={isDark ? "Modo claro" : "Modo oscuro"}
          >
            {isDark ? (
              <i className="fas fa-sun text-lg"></i>
            ) : (
              <i className="fas fa-moon text-lg"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
