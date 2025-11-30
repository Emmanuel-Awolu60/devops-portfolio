import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Let's Collaborate
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
          Whether you need to optimize your CI/CD pipelines, migrate to the cloud, or discuss the latest in DevOps trends, I'm always open to connecting.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          <a 
            href="mailto:contact@example.com"
            className="flex items-center gap-3 px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group w-full md:w-auto"
          >
            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-medium text-slate-900 dark:text-white">emmanuelawolu8@gmail.com</span>
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/Emmanuel-Awolu60" target="_blank" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-awolu-463304254/" target="_blank" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com/emmanuelao_" target="_blank" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-900 transition-all">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;