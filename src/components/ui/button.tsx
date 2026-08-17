import { cn } from "../../lib/cn";

interface ButtonProps {
     children: React.ReactNode;
     onClick?: () => void;
     variant?: "primary" | "black" | "white" | "ghost";
     size?: "sm" | "md" | "lg" | "icon";
     className?: string;
     type?: "button" | "submit";
     disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
     children,
     onClick,
     variant = "primary",
     size = "md",
     className,
     type = "button",
     disabled = false,
}) => {
     const variantStyles: Record<string, string> = {
          primary: "bg-primary-gradient shadow-md transition-all hover:text-background hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-none",
          black: "bg-foreground text-background hover:bg-background hover:text-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-none",
          white: "bg-background text-foreground hover:bg-foreground hover:text-background transition-all hover:-translate-y-0.5 active:translate-y-0.5",
          ghost: "border-none text-primary-gradient",
     };
     const sizeStyles: Record<string, string> = {
          md: "h-8 px-4 py-2.5 gap-2 text-sm",
          lg: "h-10 px-6 py-3 gap-3 text-base",
          icon: "h-8 w-8 p-0 text-sm",
     };
     return (
          <button
               type={type}
               onClick={onClick}
               className={cn(
                    "inline-flex items-center justify-center border-2 font-bold cursor-pointer",
                    variantStyles[variant],
                    sizeStyles[size],
                    className,
               )}
               disabled={disabled}
          >
               {children}
          </button>
     );
};

export default Button;
