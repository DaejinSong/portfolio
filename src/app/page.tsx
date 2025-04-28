import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import TechStackSection from '../components/TechStackSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />
    </main>
  )
}
