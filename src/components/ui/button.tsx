import { cn } from "../../lib/cn";

interface ButtonProps {
     children: React.ReactNode;
     onClick?: () => void;
     variant?: "primary" | "black";
     size?: "sm" | "md" | "lg" | "icon";
     className?: string;
     type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
     children,
     onClick,
     variant = "primary",
     size = "md",
     className,
     type = "button",
}) => {
     const variantStyles: Record<string, string> = {
          primary: "bg-primary-gradient ",
          black: "bg-foreground text-background hover:bg-background hover:text-foreground",
     };
     const sizeStyles: Record<string, string> = {
          md: "h-8 px-4 py-2.5 gap-2 text-sm",
          icon: "h-8 w-8 p-0 text-sm",
     };
     return (
          <button
               type={type}
               onClick={onClick}
               className={cn(
                    "inline-flex items-center justify-center border-2 shadow-md font-bold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0.5 active:shadow-none",
                    variantStyles[variant],
                    sizeStyles[size],
                    className,
               )}
          >
               {children}
          </button>
     );
};

export default Button;
