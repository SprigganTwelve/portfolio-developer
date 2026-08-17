import { techStack } from "../../data/data";
import { cn } from "../../lib/cn";

const TechStackMarquee = ({ className }: { className?: string }) => {
     return (
          <div className={cn("bg-black overflow-hidden py-3", className)}>
               <div className="marquee-track">
                    {[...techStack, ...techStack].map((tech, i) => {
                         const skillColor =
                              i % 3 === 0
                                   ? "var(--color-primary-start)"
                                   : i % 3 === 1
                                     ? "var(--color-primary-end)"
                                     : "var(--color-white)";
                         return (
                              <span
                                   key={i}
                                   className="font-display text-sm font-black px-6 whitespace-nowrap"
                                   style={{
                                        color: skillColor,
                                   }}
                              >
                                   {tech} ✦
                              </span>
                         );
                    })}
               </div>
          </div>
     );
};

export default TechStackMarquee;
