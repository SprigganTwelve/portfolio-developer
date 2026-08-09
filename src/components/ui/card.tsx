import { cn } from "../../lib/cn";
import type { UIComponentVariant } from "./typeVariant";

interface CardProps {
     children: React.ReactNode;
     className?: string;
     style?: React.CSSProperties;
     variant?: UIComponentVariant;
     onClick?: () => void;
     hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, style, variant = "default", onClick, hover = false }) => {
     const variants = {
          default: "border-3",
          blue: "border-2 border-primary-end",
          pink: "border-2 border-primary-start",
     };

     const timing = "transition-all duration-120 ease-in-out";
     return (
          <div
               onClick={onClick}
               className={cn(
                    "p-6 bg-background shadow-md",
                    variants[variant],
                    (onClick || hover) &&
                         `cursor-pointer hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-md ${timing}`,
                    className,
               )}
               style={style}
          >
               {children}
          </div>
     );
};

export default Card;
