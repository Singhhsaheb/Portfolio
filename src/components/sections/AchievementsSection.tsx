"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Users, BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";

const achievements = [
  { icon: Award, title: "HackVega 2.0 Finalist", desc: "Top 47,796+ participants; Round 3 shortlisted." },
  { 
    icon: Trophy, 
    title: "XR Hackathon Winner", 
    desc: "Winner at XR Creator Hackathon, Parul University.", 
    image: "/achievements/xr-hackathon-cert.jpg" 
  },
  { 
    icon: Users, 
    title: "PU Code Finalist", 
    desc: "Top 150 Finalist at PU Code Hackathon 2.0.", 
    image: "/achievements/pucode-cert.jpg" 
  },
  { 
    icon: BookOpen, 
    title: "350+ LeetCode", 
    desc: "Consistently problem solving on LeetCode.", 
    link: "https://leetcode.com/u/Singh-Sahab/" 
  },
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
                className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-cyan-500/50 transition-all duration-500 overflow-hidden relative min-h-[280px]"
              >
                {/* Background Image on Hover */}
                {item.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-20 blur-xl scale-110"
                    />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-4 pb-12 z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  </div>
                )}

                {/* Text Content */}
                <div className={`relative z-10 flex flex-col items-center transition-opacity duration-500 w-full h-full ${item.image ? 'group-hover:opacity-0' : ''}`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-6">{item.desc}</p>
                </div>

                {/* Link Button */}
                {item.link && (
                  <div className="relative z-20 mt-auto w-full">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center space-x-2 w-full py-2 px-4 rounded-xl font-bold text-sm bg-white/5 border border-white/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-gray-900 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                    >
                      <span>View Profile</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
