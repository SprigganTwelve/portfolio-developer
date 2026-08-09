import Card from "../../components/ui/card";
import { stats } from "../../data/data";

const StatsSummary = () => {
     return (
          <section className="sq-pattern py-12">
               <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                         {stats.map((stat, i) => {
                              const colors = [
                                   "var(--primary-start)",
                                   "var(--primary-end)",
                                   "var(--primary-start)",
                                   "var(--primary-end)",
                              ];
                              return (
                                   <Card
                                        className="text-center"
                                        hover={true}
                                        key={i}
                                        style={{ borderColor: colors[i] }}
                                   >
                                        <div
                                             className="font-display font-medium text-2xl md:text-3xl mb-1 leading-tight"
                                             style={{ color: colors[i] }}
                                        >
                                             {stat.value}
                                        </div>
                                        <div className="font-semibold text-sm md:text-base text-gray-800 mb-1">
                                             {stat.label}
                                        </div>
                                        <div className="text-xs text-muted">{stat.sub}</div>
                                   </Card>
                              );
                         })}
                    </div>
               </div>
          </section>
     );
};

export default StatsSummary;
