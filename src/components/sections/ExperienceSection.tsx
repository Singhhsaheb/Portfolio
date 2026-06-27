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

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-400/50 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-start md:items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform md:-translate-x-1/2 mt-2 md:mt-0 z-10 shadow-[0_0_10px_#06b6d4]" />

                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div
                    className={`glass-card p-6 md:p-8 rounded-2xl ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                      }`}
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-sm font-medium text-purple-400 mb-2">{exp.company}</h4>
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 mb-4 border border-white/5">
                      {exp.date}
                    </span>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="mr-2 text-cyan-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
