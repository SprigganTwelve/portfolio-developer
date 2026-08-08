import { cn } from "../../lib/cn";

interface CardProps {
     children: React.ReactNode;
     className?: string;
     style?: React.CSSProperties;
     variant?: "default";
     onClick?: () => void;
     hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, style, variant = "default", onClick, hover = false }) => {
     const variants = {
          default: "border-3",
     };

     const shadowStyles = {
          default: "shadow-lg",
     };

     const timing = "transition-all duration-120 ease-in-out";
     return (
          <div
               onClick={onClick}
               className={cn(
                    "p-6 bg-background",
                    variants[variant],
                    shadowStyles[variant],
                    (onClick || hover) &&
                         `cursor-pointer hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0.5 active:shadow-md ${timing}`,
                    className,
               )}
               style={style}
          >
               {children}
          </div>
     );
};

export default Card;
