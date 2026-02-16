import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-3xl border bg-card text-card-foreground shadow-sm p-6 md:p-8",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
