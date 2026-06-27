"use client";

import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    category: "Artificial Intelligence",
    date: "June 25, 2026",
    readTime: "5 min read",
    excerpt: "Exploring how large language models and AI coding assistants are fundamentally changing the way software engineers build applications.",
  },
  {
    id: 2,
    title: "Winning Hackathons: A Developer's Strategy",
    category: "Career",
    date: "April 12, 2026",
    readTime: "7 min read",
    excerpt: "My journey to winning the XR Hackathon and practical tips on forming a team, brainstorming ideas, and delivering a winning pitch.",
  },
  {
    id: 3,
    title: "Building Scalable AI Applications with Next.js",
    category: "Web Development",
    date: "February 08, 2026",
    readTime: "8 min read",
    excerpt: "A deep dive into architecture patterns for integrating Python-based Machine Learning models with Next.js frontends.",
  },
  {
    id: 4,
    title: "Machine Learning for Anomaly Detection",
    category: "Machine Learning",
    date: "November 19, 2025",
    readTime: "10 min read",
    excerpt: "Understanding Random Forest models and how we applied them to detect malware in executable files with high accuracy.",
  }
];

export default function BlogPage() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden pt-32 pb-24">
      <ParticleBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Writings</span>
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Thoughts on Artificial Intelligence, Machine Learning, Programming, and my journey in tech.
            </p>
          </motion.div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <article className="glass-card p-8 rounded-3xl group cursor-pointer border border-white/5 hover:border-purple-500/50 transition-colors">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/20">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-6 font-medium text-cyan-400 flex items-center">
                    Read article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
