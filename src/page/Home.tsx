import AboutSection from "./pagesections/AboutSection";
import BackgroundTimelineSection from "./pagesections/BackgroundTimelineSection";
import ContactSection from "./pagesections/ContactSection";
import Hero from "./pagesections/Hero";
import ProjectsSection from "./pagesections/ProjectsSection";
import SkillsSection from "./pagesections/SkillsSection";
import StatsSummary from "./pagesections/StatsSummary";
import TechnologyWatchSection from "./pagesections/TechnologyWatchSection";
import TechStackMarquee from "./pagesections/TechStackMarquee";

const Home = () => {
     return (
          <main>
               <TechStackMarquee className="mt-12" />
               <Hero />
               <TechStackMarquee />
               <StatsSummary />
               <ProjectsSection />
               <SkillsSection />
               <BackgroundTimelineSection />
               <TechnologyWatchSection />
               <AboutSection />
               <ContactSection />
          </main>
     );
};

export default Home;
