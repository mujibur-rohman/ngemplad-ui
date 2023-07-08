import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-sm border border-input bg-background px-2 py-2 transition-all text-sm ring-offset-background placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
  {
    variants: {
      sizes: {
        sm: "h-7 text-xs",
        md: "h-8 text-sm",
        lg: "h-10 text-md",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        full: "rounded-full px-3",
      },
    },
    defaultVariants: {
      sizes: "md",
      rounded: "md",
    },
  }
);

export interface InputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  icon?: React.ReactElement;
  iconStyle?: string;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, error, sizes, rounded, icon, iconStyle, ...props }, ref) => {
    return (
      <div className={cn("relative flex flex-col", { "text-error": error })}>
        <input
          className={cn(
            inputVariants({ sizes, rounded }),
            {
              "border-error focus:ring-error text-error placeholder:text-error/60":
                error,
              "pr-8": icon,
            },
            className
          )}
          ref={ref}
          {...props}
          type="text"
        />
        {icon && (
          <div
            className={cn(
              "absolute bg-background right-0 top-0 bottom-0 flex items-center justify-center m-2 text-ring"
            )}
          >
            {React.cloneElement(icon, {
              className: cn(
                "w-5 h-5",
                {
                  "w-4 h-4": sizes === "sm",
                },
                iconStyle
              ),
            })}
          </div>
        )}
      </div>
    );
  }
);
InputText.displayName = "InputText";

export { InputText };
