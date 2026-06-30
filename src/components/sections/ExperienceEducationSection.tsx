"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Operation Executive Intern",
    company: "Training & Placement Cell, Parul University",
    date: "Aug 2025 – Feb 2026",
    description: [
      "Managed end-to-end placement operations including registrations, assessments, interviews, and recruiter coordination.",
      "Coordinated 150+ placement drives involving 10,000+ students and 100+ recruiters.",
      "Maintained placement databases, hiring reports, and recruitment analytics.",
      "Collaborated with students, faculty, and recruiters to streamline hiring processes.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Parul University",
    date: "Jul 2024 – May 2028",
    details: [
      "CGPA: 7.38/10 | SGPA: 7.87/10",
      "Relevant Coursework: DSA, DBMS, OOP, Operating Systems, Computer Networks.",
    ],
  },
  {
    degree: "Dual Diploma in Neural Network & Deep Learning",
    institution: "Parul University",
    date: "Aug 2025 – Aug 2026",
    details: [
      "CGPA: 9.0/10",
      "Specialized in advanced AI/ML architectures and deep learning techniques.",
    ],
  },
];

export default function ExperienceEducationSection() {
  return (
    <section id="resume" className="py-24 relative z-10 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Resume & <span className="text-gradient">Background</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Professional Experience</h3>
            <div className="relative pl-8 border-l-2 border-cyan-500/30 space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#06b6d4] border-4 border-black" />
                  <div className="glass-card p-6 md:p-8 rounded-2xl group hover:border-cyan-500/30 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <h5 className="text-md font-semibold text-purple-400 mb-3">{exp.company}</h5>
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-cyan-300 mb-4 border border-white/10 tracking-wide font-medium">
                      {exp.date}
                    </span>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start leading-relaxed">
                          <span className="mr-2 text-cyan-400 mt-1.5 text-[10px]">◆</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">My Education</h3>
            <div className="relative pl-8 border-l-2 border-purple-500/30 space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_15px_#a855f7] border-4 border-black" />
                  <div className="glass-card p-6 md:p-8 rounded-2xl group hover:border-purple-500/30 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <h5 className="text-md font-semibold text-cyan-400 mb-3">{edu.institution}</h5>
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-purple-300 mb-4 border border-white/10 tracking-wide font-medium">
                      {edu.date}
                    </span>
                    <ul className="space-y-2">
                      {edu.details.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start leading-relaxed">
                          <span className="mr-2 text-purple-400 mt-1.5 text-[10px]">◆</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
