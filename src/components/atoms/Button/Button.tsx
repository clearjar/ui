import { cva, type VariantProps } from "class-variance-authority";

import cn from "classnames";
import React from "react";

const buttonVariants = cva(
  "font-medium text-body inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "text-gray-900 bg-alpha-00 hover:bg-alpha-200 active:bg-alpha-00 disabled:bg-alpha-800 disabled:text-alpha-400",
        soft: "text-alpha-00 bg-alpha-800 hover:bg-alpha-700 active:bg-alpha-800 disabled:bg-alpha-800",
        destructive:
          "text-alpha-00 bg-red-600 hover:bg-red-500 active:bg-red-600 disabled:bg-alpha-800",
        outline:
          "text-alpha-00 bg-alpha-800 border border-alpha-500 hover:bg-alpha-900 disabled:bg-alpha-700",
        link: "text-alpha-00 underline hover:text-alpha-200 active:text-alpha-00 disabled:text-alpha-400",
      },
      size: {
        sm: "px-[16px] py-[6px]",
        md: "px-4 py-2",
        lg: "px-[18px] py-[11px]",
        xl: "px-[28px] py-[16px]",
        icon: "px-2 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }), {
          "animate-pulse pointer-events-none": loading,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
