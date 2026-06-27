"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Parul University",
    date: "Jul 2024 – May 2028",
    details: [
      "CGPA: 7.19/10",
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

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative pl-8 border-l-2 border-purple-500/30">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_#06b6d4] border-4 border-black" />

                <div className="glass-card p-8 rounded-2xl group hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">{edu.institution}</h4>
                  <span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-xs text-cyan-300 mb-6 border border-white/10 tracking-wide font-medium">
                    {edu.date}
                  </span>
                  <ul className="space-y-3">
                    {edu.details.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm md:text-base flex items-start leading-relaxed">
                        <span className="mr-3 text-cyan-400 mt-1.5 text-xs">◆</span>
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
    </section>
  );
}
