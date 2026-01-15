
import React from 'react';
import { SKILLS, CONTENT } from '../constants';
import { Language } from '../types';

interface SkillChartProps {
  lang: Language;
}

export const SkillChart: React.FC<SkillChartProps> = ({ lang }) => {
  const t = CONTENT[lang].skills;

  return (
    <section id="skills" className="py-24 px-6 border-y border-slate-200 dark:border-white/5 glass transition-all">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">{t.title} <span className="text-indigo-600 dark:text-indigo-400">{t.highlight}</span></h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '2+', label: t.years },
              { val: '10+', label: t.projects },
              { val: '100%', label: t.commitment },
              { val: '∞', label: t.curiosity }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm">
                <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.val}</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-widest font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{skill.name}</span>
                <span className="text-xs font-mono text-indigo-600 dark:text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
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
