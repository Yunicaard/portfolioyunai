
import React from 'react';
import { PROJECTS } from '../constants';

export const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4">Proyectos <span className="gradient-text">Destacados</span></h2>
          <p className="text-slate-400 max-w-xl">Una selección de trabajos donde la arquitectura limpia se encuentra con la innovación tecnológica.</p>
        </div>
        <a href="#" className="text-indigo-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
          Ver todo el repositorio <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all transform hover:-translate-y-2">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center justify-end">
                <button className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors">
                  Detalles <i className="fas fa-chevron-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};