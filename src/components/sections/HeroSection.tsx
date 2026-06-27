"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-white/10"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-300">Available for Opportunities</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2"
          >
            {["Hi,", "I'm"].map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                {word}
              </motion.span>
            ))}
            {["Sonu", "Kumar"].map((word, i) => (
              <motion.span
                key={i + 2}
                className="text-gradient"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light"
          >
            Dedicated and results-driven B.Tech Computer Science & Engineering student with a strong foundation in Neural Networks, Deep Learning, and Full Stack Development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-300"
            >
              View My Work
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors duration-300 group"
            >
              <span>Download Resume</span>
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Photo */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_60px_rgba(6,182,212,0.6)]"
          >
            <Image
              src="/profile.png"
              alt="Sonu Kumar"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </Link>
      </motion.div>
      
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
