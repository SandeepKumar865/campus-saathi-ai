import * as React from "react"
import { cn } from "./Button"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-red-800 text-white": variant === "default",
          "border-transparent bg-gray-100 text-gray-900": variant === "secondary",
          "border-transparent bg-red-500 text-white": variant === "destructive",
          "text-foreground": variant === "outline",
          "border-transparent bg-green-100 text-green-800": variant === "success",
          "border-transparent bg-amber-100 text-amber-800": variant === "warning",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
