import SkillRow from "../../components/SkillRow";
import { skillGroups } from "../../data/data";

const SkillsSection = () => {
     return (
          <section id="skills" className="sq-pattern py-15">
               <div className="max-w-5xl mx-auto px-4">
                    <div className="mb-9">
                         <p className="font-mono text-sm font-semibold text-muted mb-2">{">"}- Compétences</p>
                         <h2 className="font-display text-4xl">
                              <span className="font-medium tracking-tight">Stack </span>
                              <span className="text-primary-gradient font-extrabold tracking-tight">Technique</span>
                         </h2>
                    </div>
                    {/* Skills rows */}
                    <div className="overflow-hidden">
                         {skillGroups.map((group, i) => (
                              <div key={group.category}>
                                   {/* dashed separator for the only first row */}
                                   {i === 0 && <div className="border-b-2 border-dashed border-border/50" />}
                                   <SkillRow group={group} index={i} />
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default SkillsSection;
