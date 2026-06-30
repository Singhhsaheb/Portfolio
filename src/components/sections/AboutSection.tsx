"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "CGPA", value: "7.38" },
  { label: "LeetCode", value: "350+" },
  { label: "Hackathons", value: "5+" },
  { label: "Placements Managed", value: "150+" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300 text-lg font-light leading-relaxed"
          >
            <p>
              Hi, I&apos;m Sonu Kumar, a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Full Stack Development, and building impactful products.
            </p>
            <p>
              I enjoy solving real-world problems using technology and continuously improving my skills through hackathons, projects, competitive programming, and internships.
            </p>
            <p>
              I am currently pursuing B.Tech in Computer Science & Engineering at Parul University. I believe in learning by building, which drives my deep interest in AI, open-source, and startup building.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
