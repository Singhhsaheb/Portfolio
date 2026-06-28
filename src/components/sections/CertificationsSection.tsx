"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    title: "Information Technology Specialist - JavaScript",
    issuer: "Certiport - Pearson VUE",
    date: "May 2025",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?pke=1&action=Result&id=GGL9Pcuyu8KcYeVrayDYwA%3D%3D",
    image: "/certificates/javascript.jpg"
  },
  {
    title: "Information Technology Specialist - HTML & CSS",
    issuer: "Certiport - Pearson VUE",
    date: "Mar 2025",
    link: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?pke=1&action=Result&id=87NDU+LWWTJ0/gjhhESrWQ==",
    image: "/certificates/html-css.jpg"
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "Jan 2026",
    link: "https://www.hackerrank.com/certificates/e5954847d1a5",
    image: "/certificates/sql.jpg"
  },
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Udemy",
    date: "Feb 2025",
    link: "https://www.udemy.com/certificate/UC-5c69ecb6-a4b7-4f8c-9d8b-565fa11b70a3/",
    image: "/certificates/azure.jpg"
  },
  {
    title: "Fundamentals of Red Hat Enterprise Linux 9",
    issuer: "Coursera",
    date: "Dec 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/0IMX3AA1TLMF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    image: "/certificates/redhat.jpg"
  },
  {
    title: "Python Programming",
    issuer: "IBM Developer Skills Network",
    date: "Sept 2025",
    link: "https://courses.etrain.skillsnetwork.site/certificates/8fcc57797a3345faa40813965dba69ac",
    image: "/certificates/python.jpg"
  },
  {
    title: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "LinkedIn Learning",
    date: "Feb 2025",
    link: "https://www.linkedin.com/learning/certificates/b015c2ec06be78b66810bb6bb4021bf86a9095c1283742d463bbe0720680ca5b",
    image: "/certificates/generative-ai.jpg"
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-white/[0.02]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-500 overflow-hidden relative min-h-[300px]"
            >
              {/* Background Image on Hover */}
              {cert.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover opacity-20 blur-xl scale-110"
                  />
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-4 pb-16 z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                </div>
              )}

              {/* Text Content (fades out on hover if image exists) */}
              <div className={`relative z-10 transition-opacity duration-500 ${cert.image ? 'group-hover:opacity-0' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                <p className="text-sm font-medium text-purple-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mb-6">{cert.date}</p>
              </div>

              {/* Action Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="relative z-20 mt-auto flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl font-bold text-sm bg-white/5 border border-white/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-gray-900 group-hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
              >
                <span>View Certificate</span>
                <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
