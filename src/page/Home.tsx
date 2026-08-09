import ExperienceTimeline from "./pagesections/ExperienceTimeline";
import Hero from "./pagesections/Hero";
import StatsSummary from "./pagesections/StatsSummary";
import TechStackMarquee from "./pagesections/TechstackMarquee";

const Home = () => {
     return (
          <main>
               <Hero />
               <TechStackMarquee />
               <StatsSummary />
               <ExperienceTimeline />
          </main>
     );
};

export default Home;
