import TimelineCard from "../../components/TimelineCard";
import { timeline } from "../../data/data";

const BackgroundTimelineSection = () => {
     return (
          <section id="background-timeline" className="py-15">
               <div className="max-w-5xl mx-auto px-4">
                    <div className="mb-9">
                         <p className="font-mono text-sm font-semibold text-muted mb-2"> {">"}- Expérience</p>
                         <h2 className="font-display text-4xl">
                              <span className="font-medium tracking-tight">Mon </span>
                              <span className="text-primary-gradient font-extrabold tracking-tight">Parcours</span>
                         </h2>
                    </div>

                    <div className="flex flex-col gap-0">
                         {timeline.map((entry, i) => (
                              <TimelineCard key={entry.period} entry={entry} index={i} />
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default BackgroundTimelineSection;
