import React from 'react';
import { skillsData } from '../data/skills';
import { Cloud, Box, Zap, Code, Activity, Terminal } from 'lucide-react';

// Map string icon names to Lucide components
const iconMap: { [key: string]: React.ElementType } = {
  Cloud,
  Box,
  Zap,
  Code,
  Activity,
  Terminal
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
            A comprehensive toolset focused on cloud-native technologies and modern DevOps practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup) => {
            const Icon = iconMap[skillGroup.icon] || Terminal;
            
            return (
              <div 
                key={skillGroup.category} 
                className="group p-6 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-md text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm font-medium rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;