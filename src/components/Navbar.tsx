import { Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { cn } from "../lib/cn";
import Button from "./ui/button";

const navLinks: { label: string; sectionId: string }[] = [
     { label: "Accueil", sectionId: "home" },
     { label: "Projets", sectionId: "projects" },
     { label: "Compétences", sectionId: "skills" },
     { label: "Parcours", sectionId: "background-timeline" },
     { label: "Veille", sectionId: "techwatch" },
     { label: "À propos", sectionId: "about" },
     { label: "Contact", sectionId: "contact" },
];

const Navbar = () => {
     const navigate = useNavigate();
     const location = useLocation();
     const { pathname } = location;

     const [menuOpen, setMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);
     const [activeSection, setActiveSection] = useState("home");

     useEffect(() => {
          const handler = () => setScrolled(window.scrollY > 20);
          window.addEventListener("scroll", handler, { passive: true });
          return () => window.removeEventListener("scroll", handler);
     }, []);

     // Track active section via IntersectionObserver (only on Home page)
     useEffect(() => {
          if (pathname !== "/") return;

          const observers: IntersectionObserver[] = []; //to disconect them all properly later
          navLinks.forEach((link) => {
               const element = document.getElementById(link.sectionId);
               if (!element) return;
               const observer = new IntersectionObserver(
                    ([entry]) => {
                         if (entry.isIntersecting) setActiveSection(link.sectionId);
                    },
                    { rootMargin: "-54px 0px -60% 0px", threshold: 0.25 },
               );
               observer.observe(element);
               observers.push(observer);
          });

          return () => observers.forEach((o) => o.disconnect());
     }, [pathname, activeSection]);

     // Scroll helper that accounts for the fixed header height
     const scrollToSection = (sectionId: string) => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
     };

     const handleNavClick = (sectionId: string) => {
          setMenuOpen(false);
          navigate(`/#${sectionId}`);
          setTimeout(() => scrollToSection(sectionId), 60);
     };

     return (
          <header
               className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b-2 bg-background",
                    scrolled && "shadow-md bg-(--nav-bg-scrolled)",
               )}
          >
               <nav className={cn("flex items-center justify-between px-4 py-2 h-12", "max-w-7xl mx-auto")}>
                    {/* Logo */}
                    <button
                         className="font-extrabold cursor-pointer uppercase font-logo"
                         onClick={() => handleNavClick("home")}
                    >
                         <span className="text-primary-gradient">ZD</span>
                         <span>.</span>
                    </button>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-2">
                         {navLinks.map((link) => {
                              return (
                                   <button
                                        key={link.sectionId}
                                        onClick={() => handleNavClick(link.sectionId)}
                                        className={cn(
                                             "px-4 py-2 text-sm font-medium transition-discrete duration-200 hover:text-primary-gradient hover:cursor-pointer",
                                             activeSection === link.sectionId && "border-b-4 border-text-muted",
                                        )}
                                   >
                                        {link.label}
                                   </button>
                              );
                         })}
                    </div>

                    {/* Desktop right actions */}
                    <div className="hidden md:flex items-center gap-2">
                         <Button size="icon" variant="black" onClick={() => navigate("/404")}>
                              <Moon size={16} />
                         </Button>
                         <a
                              href="https://github.com/SprigganTwelve"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub"
                         >
                              <Button variant="black">
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
                         <Button>CV↓</Button>
                    </div>

                    {/* Mobile actions */}
                    <div className="flex md:hidden items-center gap-2">
                         <Button size="icon" variant="black" onClick={() => navigate("/404")}>
                              <Moon size={16} />
                         </Button>

                         <Button
                              variant="ghost"
                              className="transition-transform duration-200 hover:scale-110 active:scale-90"
                              onClick={() => setMenuOpen(!menuOpen)}
                         >
                              {menuOpen ? "✕" : "☰"}
                         </Button>
                    </div>
               </nav>

               {/* Mobile menu — hidden entirely on md+ */}
               {menuOpen && (
                    <div className="md:hidden border-t-2 mb-2">
                         <div className="flex flex-col gap-2 mt-2">
                              {navLinks.map((link) => {
                                   return (
                                        <button
                                             key={link.sectionId}
                                             onClick={() => handleNavClick(link.sectionId)}
                                             className={cn(
                                                  "text-center py-2 font-body font-semibold text-base w-full transition-discrete duration-200 hover:text-primary-gradient hover:cursor-pointer",
                                                  activeSection === link.sectionId &&
                                                       "border-b-2 border-primary-gradient",
                                             )}
                                        >
                                             {link.label}
                                        </button>
                                   );
                              })}

                              <div className="flex justify-content gap-2 m-2">
                                   <a
                                        href="https://github.com/SprigganTwelve"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mx-auto w-full"
                                        aria-label="GitHub"
                                   >
                                        <Button variant="black" className="mx-auto w-full">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="16"
                                                  height="16"
                                                  fill="currentColor"
                                                  viewBox="0 0 16 16"
                                             >
                                                  {/* pris depuis https://icons.getbootstrap.com/ */}
                                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                             </svg>
                                             GitHub
                                        </Button>
                                   </a>
                                   <Button className="mx-auto w-full">CV↓</Button>
                              </div>
                         </div>
                    </div>
               )}
          </header>
     );
};

export default Navbar;
