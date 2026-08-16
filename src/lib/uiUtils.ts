import * as Icons from "lucide-react";

export const scrollToSection = (sectionId: string) => {
     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export const smoothScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export function getIcon(iconName: string) {
     return (Icons as any)[iconName] || Icons.Circle;
}
