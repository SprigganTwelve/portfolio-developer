export const scrollToSection = (sectionId: string) => {
     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export const smoothScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
