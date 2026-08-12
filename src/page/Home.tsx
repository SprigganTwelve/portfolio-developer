import ExperienceTimeline from "./pagesections/ExperienceTimeline";
import Hero from "./pagesections/Hero";
import StatsSummary from "./pagesections/StatsSummary";
import TechnologyWatchSection from "./pagesections/TechnologyWatchSection";
import TechStackMarquee from "./pagesections/TechStackMarquee";

const Home = () => {
     return (
          <main>
               <Hero />
               <TechStackMarquee />
               <StatsSummary />
               <ExperienceTimeline />
               <TechnologyWatchSection />
          </main>
     );
};

export default Home;
