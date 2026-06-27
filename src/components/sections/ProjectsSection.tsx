"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Customer Support Face Call System",
    description: "Built a real-time customer support platform with browser-based video calling, enabling direct communication between customers and agents.",
    features: ["Browser-based video calling", "Real-time communication", "Reduced response time"],
    tech: ["React.js", "Node.js", "WebRTC"],
    link: "https://github.com/Singhhsaheb/Customer-Support-Face-call",
    github: "https://github.com/Singhhsaheb/Customer-Support-Face-call",
  },
  {
    title: "MatchMaker - The Date Crew",
    description: "Developed a matchmaking and social networking platform that helps users connect based on interests and preferences.",
    features: ["Profile management", "Interactive matching", "Responsive UI"],
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://singhhsaheb.github.io/Matchmaker/",
    github: "https://github.com/Singhhsaheb/Matchmaker",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-125 group-hover:scale-100">
                  <div className="flex gap-4">
                    <a href={project.github} className="p-3 bg-black/50 hover:bg-purple-600 rounded-full backdrop-blur-md transition-colors">
                      <FaGithub size={20} className="text-white" />
                    </a>
                    <a href={project.link} className="p-3 bg-black/50 hover:bg-cyan-600 rounded-full backdrop-blur-md transition-colors">
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-purple-300 bg-purple-900/30 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
