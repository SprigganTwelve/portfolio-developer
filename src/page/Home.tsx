import ExperienceTimeline from "./pagesections/ExperienceTimeline";
import Hero from "./pagesections/Hero";
import StatsSummary from "./pagesections/StatsSummary";
import TechnologyWatchSection from "./pagesections/TechnologyWatchSection";
import TechStackMarquee from "./pagesections/TechStackMarquee";

interface HomeProps {
     onViewArticle: (id: string) => void;
     onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onViewArticle }) => {
     return (
          <main>
               <Hero />
               <TechStackMarquee />
               <StatsSummary />
               <ExperienceTimeline />
               <TechnologyWatchSection onViewArticle={onViewArticle} />
          </main>
     );
};

export default Home;
