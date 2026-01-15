
import React from 'react';
import { SKILLS } from '../constants';

export const SkillChart: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 glass border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Stack <span className="text-indigo-400">Tecnológico</span></h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Mi enfoque se centra en construir soluciones robustas utilizando lenguajes tipados y frameworks modernos. 
            Creo en el aprendizaje continuo y en la adaptación a las nuevas fronteras de la ingeniería de software.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-3xl font-bold text-white mb-1">5+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Años XP</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-3xl font-bold text-white mb-1">20+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Proyectos</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Commitment</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-3xl font-bold text-white mb-1">∞</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Curiosidad</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold">{skill.name}</span>
                <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
