import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      size: {
        xs: "h-5 px-2 text-xs",
        sm: "h-7 px-3 text-sm",
        md: "h-8 px-3 text-md",
        lg: "h-10 px-4 text-lg",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        full: "rounded-full",
      },
    },

    defaultVariants: {
      size: "md",
      rounded: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  variant?: "filled" | "light" | "outline";
  color?: "primary" | "warning" | "success" | "error";
}

function Badge({
  className,
  variant = "filled",
  size,
  rounded,
  color = "primary",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ size, rounded }),
        {
          // Filled
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80":
            variant === "filled" && color === "primary",
          "border-transparent bg-warning text-warning-foreground hover:bg-warning/80":
            variant === "filled" && color === "warning",
          "border-transparent bg-success text-success-foreground hover:bg-success/80":
            variant === "filled" && color === "success",
          "border-transparent bg-error text-error-foreground hover:bg-error/80":
            variant === "filled" && color === "error",
          // Light
          "border-transparent bg-primary/10 text-primary hover:bg-primary/20":
            variant === "light" && color === "primary",
          "border-transparent bg-warning/10 text-warning hover:bg-warning/20":
            variant === "light" && color === "warning",
          "border-transparent bg-success/10 text-success hover:bg-success/20":
            variant === "light" && color === "success",
          "border-transparent bg-error/10 text-error hover:bg-error/20":
            variant === "light" && color === "error",
          // Outline
          "border-primary bg-transparent text-primary hover:bg-primary/10":
            variant === "outline" && color === "primary",
          "border-warning bg-transparent text-warning hover:bg-warning/10":
            variant === "outline" && color === "warning",
          "border-success bg-transparent text-success hover:bg-success/10":
            variant === "outline" && color === "success",
          "border-error bg-transparent text-error hover:bg-error/10":
            variant === "outline" && color === "error",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
