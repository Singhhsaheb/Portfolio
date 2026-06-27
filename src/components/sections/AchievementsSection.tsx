"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Users, BookOpen } from "lucide-react";

const achievements = [
  { icon: Award, title: "HackVega 2.0 Finalist", desc: "Top 47,796+ participants; Round 3 shortlisted." },
  { icon: Trophy, title: "XR Hackathon Winner", desc: "Winner at XR Creator Hackathon, Parul University." },
  { icon: Users, title: "PU Code Finalist", desc: "Top 150 Finalist at PU Code Hackathon 2.0." },
  { icon: BookOpen, title: "350+ LeetCode", desc: "Consistently problem solving on LeetCode." },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Awards</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
