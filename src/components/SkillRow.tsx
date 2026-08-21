import type { SkillGroup } from "../data/data";
import { cn } from "../lib/cn";
import Tag from "./ui/tag";

interface SkillRowProps {
     group: SkillGroup;
     index: number;
}

const SkillRow: React.FC<SkillRowProps> = ({ group, index }) => {
     const num = String(index + 1).padStart(2, "0");
     return (
          <div
               className={cn(
                    "border-b-2 border-dashed border-border/50 cursor-pointer group",
                    group.colorClass === "pink" ? "hover:bg-primary-start/50" : "hover:bg-primary-end/50",
                    "duration-100 ease-in",
               )}
          >
               <div className="flex flex-col lg:flex-row lg:items-center gap-6 px-6 py-7">
                    {/* Numéro */}
                    <span className="font-display shrink-0 select-none text-2xl font-bold tracking-tighter text-muted opacity-50 mr-2">
                         {num}
                    </span>

                    {/* Titre + description */}
                    <div className="flex-1 min-w-0">
                         <h3 className="font-display mb-2 text-5xl">{group.category}</h3>
                         <p className="font-mono text-sm leading-relaxed max-w-md text-muted">{group.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="max-w-105 h-min flex flex-wrap gap-2 lg:justify-end items-center">
                         {group.skills.map((skill) => {
                              return (
                                   <Tag
                                        variant="muted"
                                        className={cn(
                                             "px-3 py-1",
                                             group.colorClass === "blue"
                                                  ? "group-hover:bg-primary-end"
                                                  : "group-hover:bg-primary-start",
                                        )}
                                   >
                                        {skill}
                                   </Tag>
                              );
                         })}
                    </div>
               </div>
          </div>
     );
};

export default SkillRow;
