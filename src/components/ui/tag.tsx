import { cn } from "../../lib/cn";
import type { UIComponentVariant } from "./typeVariant";

interface TagProps {
     children: React.ReactNode;
     className?: string;
     variant?: UIComponentVariant | "muted";
}

const Tag: React.FC<TagProps> = ({ children, className, variant = "blue" }) => {
     const variants = {
          blue: "bg-primary-end",
          pink: "bg-primary-start",
          default: "bg-primary-gradient",
          muted: "bg-muted/10",
     };
     return (
          <div
               className={cn(
                    "font-mono px-4 py-1.5 inline-flex items-center gap-2 text-xs border-2",
                    variants[variant],
                    className,
               )}
          >
               {children}
          </div>
     );
};

export default Tag;
