"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    skills: ["Java", "C", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "React.js"],
  },
  {
    category: "Backend & Database",
    skills: ["Node.js", "REST APIs", "MySQL"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Neural Networks", "Deep Learning", "TensorFlow", "NLP"],
  },
  {
    category: "Cloud & OS",
    skills: ["Microsoft Azure (AZ-900)", "Red Hat Enterprise Linux"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors group"
            >
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-colors cursor-default border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
