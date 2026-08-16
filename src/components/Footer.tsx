import { smoothScrollToTop } from "../lib/uiUtils";

const Footer = () => {
     return (
          <footer className="bg-black text-white">
               <div className="accent-line" />

               <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 ">
                         <div className="flex flex-col w-full">
                              <button className="text-primary-start/80 underline hover:text-white transition-discrete duration-200 cursor-pointer">
                                   <a href="mailto:angepaterne.dali@gmail.com">✉ angepaterne.dali@gmail.com</a>
                              </button>
                              <button className="text-primary-end/80 underline hover:text-white transition-discrete duration-200 cursor-pointer">
                                   <a href="tel:00330744407307">(+33) 07 44 40 73 07</a>
                              </button>
                         </div>
                         <div className="font-display text-3xl mb-2 w-full flex items-center justify-center">
                              <span className="text-primary-gradient font-black tracking-tighter">Zouayobo</span>
                              <span className="tracking-tighter">DALI</span>
                         </div>
                         <div className="flex items-center justify-center flex-wrap gap-3 w-full">
                              <a
                                   href="https://github.com/spriggantwelve"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="hover:scale-120"
                              >
                                   <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                   >
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                   </svg>
                              </a>
                              <a
                                   href="https://www.linkedin.com/in/zouayobo-ange-paterne-dali-aa385429b"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="hover:scale-120"
                              >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                   >
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                   </svg>
                              </a>
                              <button
                                   onClick={smoothScrollToTop}
                                   className="text-sm hover:scale-120"
                                   aria-label="Retour en haut de la page"
                              >
                                   ↑ Haut
                              </button>
                         </div>
                    </div>

                    <div className="mt-10 pt-6 text-center text-muted text-sm font-body border-t border-muted">
                         <p>© 2026 Zouayobo Dali — Tous droits réservés.</p>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
