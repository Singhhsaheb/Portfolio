"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const recognitions = [
  {
    title: "XR Creator Hackathon Winner",
    image: "/xr-hackathon.jpg",
    description: "Securing the top position at Parul University's XR Hackathon.",
    objectPosition: "center",
  },
  {
    title: "Placement Coordinator",
    image: "/placement-coordinator.jpg",
    description: "Leading placement operations and coordinating with top recruiters.",
    objectPosition: "top",
  },
];

export default function RecognitionSection() {
  return (
    <section id="recognition" className="py-24 relative z-10 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Recognitions</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card rounded-3xl overflow-hidden group hover:border-cyan-500/30 transition-colors"
            >
              <div className="relative w-full h-72 md:h-96 overflow-hidden bg-black/20">
                {/* Blurred Background */}
                <Image
                  src={item.image}
                  alt={item.title + " background"}
                  fill
                  className="object-cover opacity-40 blur-xl scale-110"
                />
                {/* Main Contained Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-in-out z-10 p-2"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-20 pointer-events-none" />
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
