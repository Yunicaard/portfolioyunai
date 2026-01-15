
import React from 'react';
import { PROJECTS, CONTENT } from '../constants';
import { Language } from '../types';

interface ProjectGalleryProps {
  lang: Language;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ lang }) => {
  const t = CONTENT[lang].projects;
  const projects = PROJECTS[lang];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">{t.title} <span className="gradient-text">{t.highlight}</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">{t.subtitle}</p>
        </div>
        <a href="https://github.com/Yunicaard" target="_blank" className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
          {t.viewMore} <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group glass rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all transform hover:-translate-y-2 shadow-sm">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center justify-end">
                <button className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                  {t.details} <i className="fas fa-chevron-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
