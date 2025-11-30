import React from "react";
import { ArrowRight, Server, Code2 } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-16 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Column */}
        <div className="flex-1 text-center md:text-left px-4 sm:px-0">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Automating <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
              Infrastructure
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-4 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            I bridge the gap between development and operations. Building
            reliable, scalable, and secure cloud infrastructure is my craft.
          </p>

          <p className="text-base text-slate-500 dark:text-slate-400 mb-8 font-medium flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
            <span className="flex items-center gap-1">
              <Code2 className="w-4 h-4" />
              Software Development Background
            </span>
            <span className="hidden md:inline mx-2">•</span>
            <span className="flex items-center gap-1">
              <Server className="w-4 h-4" />
              DevOps Focus
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 md:text-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 md:text-lg transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Code/Visual Column */}
        <div className="flex-1 w-full max-w-lg md:max-w-none relative px-4 sm:px-0">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-slate-800 border border-slate-700">
            <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-700 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <div className="text-slate-400"># Initializing Terraform...</div>
              <div className="text-green-400">$ terraform init</div>
              <div className="text-slate-300 mt-2">
                Initializing the backend...
              </div>
              <div className="text-green-400 mt-2">
                Successfully configured the backend "s3"!
              </div>
              <div className="text-slate-400 mt-4">
                # Applying Infrastructure Plan
              </div>
              <div className="text-green-400">
                $ terraform apply -auto-approve
              </div>
              <div className="text-blue-400 mt-2">
                module.k8s_cluster.aws_eks_cluster.main: Creating...
              </div>
              <div className="text-blue-400">
                module.vpc.aws_vpc.main: Creation complete after 3s
                [id=vpc-0a1b2c3d]
              </div>
              <div className="text-green-400 mt-4">
                Apply complete! Resources: 12 added, 0 changed, 0 destroyed.
              </div>
              <div className="animate-pulse text-slate-100 mt-2">_</div>
            </div>
          </div>

          {/* Decorative Grid Behind */}
          <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-slate-200 dark:border-slate-800 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
