import type { TimelineEntry } from "../data/data";
import { cn } from "../lib/cn";
import Card from "./ui/card";
import Tag from "./ui/tag";
import type { UIComponentVariant } from "./ui/typeVariant";

const TimelineCard = ({ entry, index }: { entry: TimelineEntry; index: number }) => {
     const typeStyles: Record<string, { bg: string; label: string; variant: UIComponentVariant }> = {
          education: { bg: "bg-primary-end", label: "Formation", variant: "blue" },
          work: { bg: "bg-primary-start", label: "Expérience", variant: "pink" },
          goal: { bg: "bg-primary-gradient", label: "Objectif", variant: "default" },
     };
     const style = typeStyles[entry.type];
     const isLeft = index % 2 === 0;

     return (
          <div className={cn("flex gap-4 md:gap-8", isLeft ? "md:flex-row" : "md:flex-row-reverse")}>
               {/* Card */}
               <Card variant={style.variant} hover={true} className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2.5">
                         <Tag variant={style.variant} className="px-2.5 py-0.5">
                              {style.label}
                         </Tag>
                         <span className="font-mono text-xs text-muted shrink-0 mt-1">{entry.period}</span>
                    </div>
                    <div className="mb-2.5">
                         <h3 className="font-display font-black text-lg leading-tight mt-1">{entry.title}</h3>
                         <p className="text-sm font-semibold text-muted font-body mt-0.5">{entry.organization}</p>
                    </div>
                    <p className="text-sm font-body text-gray-700 leading-relaxed mb-2.5">{entry.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-1">
                         {entry.tech.map((t) => (
                              <Tag key={t} variant="muted" className="px-2.5 py-0.5">
                                   {t}
                              </Tag>
                         ))}
                    </div>
               </Card>

               {/* Year marker */}
               <div className="flex flex-col items-center shrink-0" aria-hidden="true">
                    <div
                         className={cn(
                              "font-display text-2xl font-black w-16 h-16 flex items-center justify-center text-white shrink-0 shadow-sm border-2",
                              style.bg,
                         )}
                    >
                         <span className="text-base">{entry.year}</span>
                    </div>
                    <div className="w-[2.5px] min-h-8 bg-foreground flex-1" />
               </div>

               {/* Spacer for alternating layout */}
               <div className="flex-1 hidden md:block" />
          </div>
     );
};

export default TimelineCard;
