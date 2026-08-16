import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import type { UIComponentVariant } from "../../components/ui/typeVariant";
import { cn } from "../../lib/cn";
import { getIcon } from "../../lib/uiUtils";

const AboutSection = () => {
     return (
          <section id="about" className="py-15">
               <div className="max-w-5xl mx-auto px-4">
                    <div className="mb-9">
                         <p className="font-mono text-sm font-semibold text-muted mb-2">{">"}- À propos</p>
                         <h2 className="font-display text-4xl">
                              <span className="font-medium tracking-tight">Qui suis-</span>
                              <span className="text-primary-gradient font-extrabold tracking-tight">je?</span>
                         </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                         <div>
                              <p className="text-gray-700 leading-relaxed mb-5">
                                   Je m'appelle Zouayobo Ange-Paterne DALI, étudiant en dernière année de Bachelor
                                   Développeur Full-Stack à l'Institut IPSSI de Paris. Passionné par la technologie
                                   depuis mes années lycée, j'ai choisi de me spécialiser dans le développement logiciel
                                   pour créer des solutions concrètes à des problèmes réels.
                              </p>
                              <p className="text-gray-700 leading-relaxed mb-8">
                                   Mon approche est axée sur la qualité et la production de resultats: je crois autant
                                   en un code lisible, maintenable et testé, qu'à produire des livrables de valeur dans
                                   les délais. Je m'intéresse autant au design qu'au back-end, ce qui me permet de
                                   concevoir des applications cohérentes de A à Z.
                              </p>
                              <p className="text-gray-700 leading-relaxed mb-8">
                                   En dehors du code, je me tiens à jour sur les nouvelles technologies, notamment en
                                   Big Data et IA — ma prochaine étape académique.
                              </p>

                              {/* short boxes - soft skills */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-0.5">
                                   {[
                                        {
                                             icon: "BadgeCheck",
                                             variant: "pink",
                                             title: "Qualité avant tout",
                                             text: "Code propre, testé, documenté.",
                                        },
                                        {
                                             icon: "GraduationCap",
                                             variant: "blue",
                                             title: "Apprentissage continu",
                                             text: "Veille tech active, curiosité permanente.",
                                        },
                                        {
                                             icon: "Handshake",
                                             variant: "blue",
                                             title: "Travail d'équipe",
                                             text: "Agile, communication, collaboration.",
                                        },
                                        {
                                             icon: "Lightbulb",
                                             variant: "pink",
                                             title: "Créativité",
                                             text: "Solutions élégantes aux problèmes complexes.",
                                        },
                                   ].map((v) => {
                                        const Icon = getIcon(v.icon);
                                        return (
                                             <Card
                                                  className="p-3 w-56"
                                                  hover={true}
                                                  variant={v.variant as UIComponentVariant}
                                             >
                                                  <div
                                                       aria-hidden="true"
                                                       style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}
                                                  >
                                                       <Icon
                                                            size={20}
                                                            className={cn(
                                                                 v.variant === "pink"
                                                                      ? "text-primary-start"
                                                                      : "text-primary-end",
                                                            )}
                                                       />
                                                  </div>
                                                  <div className="font-display text-sm mb-1 font-black">{v.title}</div>
                                                  <div className="text-xs text-muted">{v.text}</div>
                                             </Card>
                                        );
                                   })}
                              </div>
                         </div>

                         {/* quick facts */}
                         <Card className="text-background bg-foreground p-8 border border-white">
                              <h3 className="font-display font-extrabold text-2xl mb-6 text-primary-gradient">
                                   En quelques chiffres
                              </h3>
                              <dl className="flex flex-col gap-5">
                                   {[
                                        { label: "Formation", value: "Bachelor Full-Stack — IPSSI" },
                                        { label: "Localisation", value: "Paris, France" },
                                        { label: "Expérience", value: "3 stages (OHana, ONRDH)" },
                                        { label: "Projets réalisés", value: "4 projets significatifs" },
                                        { label: "Langues", value: "Français (natif) · Anglais (B2)" },
                                        { label: "Objectif", value: "Mastère Big Data & IA 2025" },
                                   ].map((fact) => (
                                        <div key={fact.label} className="flex items-start gap-4">
                                             <dt className="font-mono text-xs shrink-0 text-primary-start w-30 pt-0.5">
                                                  {fact.label}
                                             </dt>
                                             <dd className="font-body text-sm text-gray-300">{fact.value}</dd>
                                        </div>
                                   ))}
                              </dl>

                              <div className="mt-8 flex gap-3 flex-wrap">
                                   <a
                                        href="https://www.linkedin.com/in/zouayobo-ange-paterne-dali-aa385429b"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                   >
                                        <Button variant="white">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="16"
                                                  height="16"
                                                  fill="currentColor"
                                                  viewBox="0 0 16 16"
                                             >
                                                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                             </svg>
                                             LinkedIn
                                        </Button>
                                   </a>
                                   <a
                                        href="https://github.com/SprigganTwelve"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                   >
                                        <Button variant="white">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="16"
                                                  height="16"
                                                  fill="currentColor"
                                                  viewBox="0 0 16 16"
                                             >
                                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                             </svg>
                                             GitHub
                                        </Button>
                                   </a>
                              </div>
                         </Card>
                    </div>
               </div>
          </section>
     );
};

export default AboutSection;
