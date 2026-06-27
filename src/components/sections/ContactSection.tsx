"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s talk about everything!</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Don&apos;t like forms? Send me an email. I&apos;m currently open to new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300">Email</h4>
                  <a href="mailto:Kumarsonu1082006@gmail.com" className="text-white hover:text-cyan-400 transition-colors">Kumarsonu1082006@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-purple-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300">Location</h4>
                  <p className="text-white">Vadodara, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex space-x-4">
              <a href="https://github.com/Singhhsaheb" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#181717] flex items-center justify-center text-white hover:scale-110 shadow-lg shadow-black/50 transition-all">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/singhhsaheb186" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 shadow-lg shadow-blue-900/50 transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/singhh_saheb_/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 shadow-lg shadow-pink-900/50 transition-all">
                <FaInstagram size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="glass-card p-8 rounded-3xl space-y-6">
              {/* Replace with your actual Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="c1ec0646-7fb0-4cf6-8504-aaef10d62c78" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
