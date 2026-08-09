import Button from "../../components/ui/button";
import Tag from "../../components/ui/tag";

const Hero = () => {
     return (
          <section className="sq-pattern min-h-screen flex items-center pt-20 pb-5">
               <div className="max-w-7xl mx-auto px-4 py-5 w-full">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-8 lg:gap-20">
                         {/* Text content */}
                         <div>
                              {/* Status tag */}
                              <Tag variant="blue" className="mb-3">
                                   <span
                                        className="bg-green-300 inline-block rounded-full w-2 h-2"
                                        aria-hidden="true"
                                   />
                                   Disponible pour une alternance Mastère
                              </Tag>

                              <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-4">
                                   <span className="text-primary-gradient tracking-tight font-black">Zouayobo </span>
                                   <span className="tracking-tight">DALI</span>
                              </h1>

                              <div className="text-xl md:text-2xl font-semibold mb-5 inline-block bg-primary-start shadow-md border-2 px-4 py-1">
                                   Développeur Full-Stack
                              </div>

                              <p className="text-base md:text-lg leading-relaxed mb-5 max-w-lg text-muted">
                                   Étudiant en Bachelor Full-Stack à l&apos;IPSSI, passionné par la création
                                   d&apos;applications web et mobiles modernes. Je conçois des expériences numériques
                                   complètes, du back-end à l'interface utilisateur.
                              </p>

                              <div className="flex flex-wrap gap-3">
                                   <Button variant="black" size="lg" className="text-base">
                                        Voir mes projets →
                                   </Button>
                                   <Button className="text-base font-bold" size="lg">
                                        ↓ Télécharger le CV
                                   </Button>
                              </div>
                         </div>

                         {/* Photo */}
                         <div className="flex justify-center lg:justify-end relative">
                              <div className="relative">
                                   {/* Offset decorative square */}
                                   <div
                                        className="absolute border-2 w-full h-full left-4 top-4"
                                        style={{
                                             background:
                                                  "linear-gradient(135deg, var(--color-primary-start), var(--color-primary-end))",
                                        }}
                                   />
                                   {/* Photo frame */}
                                   <div className="border-2 w-75 h-90 overflow-hidden relative">
                                        <img
                                             src="https://www.dropbox.com/scl/fi/tm4ivtoqb3wxxauuju0w0/zouayobo_dali.jpeg?rlkey=adrpvb906bc5m92w9albejtvs&raw=1"
                                             alt="Zouayobo DALI, développeur Full-Stack"
                                             className="w-full h-full object-cover"
                                        />
                                   </div>

                                   {/* Floating badge */}
                                   <div className="absolute -bottom-6 -left-8 font-mono text-sm font-bold p-3 border-2 shadow-md bg-primary-end">
                                        {"</>"} Full-Stack
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Hero;
