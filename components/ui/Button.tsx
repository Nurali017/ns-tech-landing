import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

// Start by defining the variants since I don't have cva installed yet, or I can install it.
// Actually, for simplicity I'll just use manual class logic or install cva. 
// Standard practice is cva. Let's stick to simple props for now to save a dependency, 
// or I can implement a simple variant mapped object.
// But cva is best. I'll just install it quickly next time if needed. 
// For now, I will use a simple implementation.

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-gray-100 hover:text-gray-900",
            link: "text-primary underline-offset-4 hover:underline",
        };

        const sizes = {
            default: "h-12 px-6 py-2",
            sm: "h-9 rounded-xl px-3",
            lg: "h-14 rounded-3xl px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
