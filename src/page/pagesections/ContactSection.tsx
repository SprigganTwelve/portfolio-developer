import { useNavigate } from "react-router";
import Button from "../../components/ui/button";
import Card from "../../components/ui/card";

const ContactSection = () => {
     const navigate = useNavigate();
     return (
          <section id="contact" className="sq-pattern py-15">
               <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                         {/* Left */}
                         <div>
                              {/* section title */}
                              <div className="mb-7">
                                   <p className="font-mono text-sm font-semibold text-muted mb-2">{">"}- Contact</p>
                                   <h2 className="font-display text-4xl">
                                        <span className="font-medium tracking-tight">Travaillons </span>
                                        <span className="text-primary-gradient font-extrabold tracking-tight">
                                             ensemble
                                        </span>
                                   </h2>
                              </div>
                              {/* short paragraph */}
                              <p className="font-body text-muted leading-relaxed mb-7">
                                   Je suis actuellement à la recherche d&apos;une alternance pour un Mastère en Big Data
                                   & IA. N&apos;hésitez pas à me contacter pour toute opportunité ou collaboration.
                              </p>
                              {/* for quick contact */}
                              <div className="flex flex-col gap-4">
                                   {[
                                        {
                                             icon: "✉",
                                             label: "Email",
                                             value: "angepaterne.dali@gmail.com",
                                             href: "mailto:angepaterne.dali@gmail.com",
                                             color: "var(--color-primary-start)",
                                        },
                                        {
                                             icon: "in",
                                             label: "LinkedIn",
                                             value: "https://www.linkedin.com/in/zouayobo-ange-paterne-dali-aa385429b",
                                             href: "https://www.linkedin.com/in/zouayobo-ange-paterne-dali-aa385429b",
                                             color: "var(--color-primary-end)",
                                        },
                                        {
                                             icon: "</>",
                                             label: "GitHub",
                                             value: "https://github.com/spriggantwelve",
                                             href: "https://github.com/spriggantwelve",
                                             color: "#0A0A0A",
                                        },
                                   ].map((contact) => (
                                        <a
                                             key={contact.label}
                                             href={contact.href}
                                             target={contact.href.startsWith("http") ? "_blank" : undefined}
                                             rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                             className="no-underline"
                                        >
                                             <Card
                                                  className="flex flex-row items-center gap-4 w-full py-4"
                                                  hover={true}
                                             >
                                                  <div
                                                       className="font-display text-xl w-12 h-12 flex items-center justify-center shrink-0 border-3"
                                                       style={{
                                                            background: contact.color,
                                                            color: contact.color === "#0A0A0A" ? "#FFFFFF" : "#0A0A0A",
                                                       }}
                                                  >
                                                       {contact.icon}
                                                  </div>
                                                  <div>
                                                       <div className="font-mono text-xs text-muted">
                                                            {contact.label}
                                                       </div>
                                                       <div className="font-semibold text-sm">{contact.value}</div>
                                                  </div>
                                             </Card>
                                        </a>
                                   ))}
                              </div>

                              {/* CV download */}
                              <Button onClick={() => navigate("cv")} className="w-full mt-6 text-base font-bold py-5">
                                   ↓ Télécharger mon CV (PDF)
                              </Button>
                         </div>

                         {/* Right: form */}
                         <div className="p-6">FORM</div>
                    </div>
               </div>
          </section>
     );
};

export default ContactSection;
