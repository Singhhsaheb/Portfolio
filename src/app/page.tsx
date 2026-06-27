import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceEducationSection from "@/components/sections/ExperienceEducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      <HeroSection />
      <AboutSection />
      <ExperienceEducationSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <RecognitionSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm glass">
        <p>© {new Date().getFullYear()} Sonu Kumar. All rights reserved.</p>
        <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
      </footer>
    </main>
  );
}
