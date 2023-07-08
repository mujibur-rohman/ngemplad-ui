import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./styles.module.css";

import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

const inputVariants = cva(styles["input-file-container"], {
  variants: {
    sizes: {
      sm: "h-7 text-xs",
      md: "h-8 text-sm",
      lg: "h-10 text-md",
    },
  },
  defaultVariants: {
    sizes: "md",
  },
});

export interface InputFileProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  iconStyle?: string;
  id?: string;
}

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  ({ className, error, sizes, id = "upload", ...props }, ref) => {
    return (
      <div
        className={cn(
          inputVariants({ sizes }),
          {
            "border-error focus:ring-error text-error placeholder:text-error/60":
              error,
          },
          className
        )}
      >
        <input
          className={styles["input-file"]}
          id={id}
          ref={ref}
          {...props}
          type="file"
        />
        <label htmlFor={id} className={styles["label-file"]}>
          <Upload className="w-4 h-4" strokeWidth={1} />
          <span className={cn({ "text-xs": sizes === "sm" })}>
            Click to Upload
          </span>
        </label>
      </div>
    );
  }
);
InputFile.displayName = "InputFile";

export { InputFile };
