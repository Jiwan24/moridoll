import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card bg-white shadow-md p-6",
        hover && "transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
