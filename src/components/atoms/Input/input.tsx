import cn from "classnames";
import { ReactElement } from "react";
import { colors } from "../../../tailwind";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: ReactElement | null;
  trailingIcon?: ReactElement | null;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, hint, error, leadingIcon, trailingIcon, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);

    let LEADING_ICON = leadingIcon;
    let TRAILING_ICON = trailingIcon;

    if (leadingIcon) {
      LEADING_ICON = React.cloneElement(leadingIcon, {
        color: error
          ? colors.rose[500]
          : isFocused
            ? colors.alpha["00"]
            : colors.alpha[500],
      });
    }

    if (trailingIcon) {
      TRAILING_ICON = React.cloneElement(trailingIcon, {
        color: error
          ? "red"
          : isFocused
            ? "var(--color-alpha-00)"
            : "var(--color-alpha-500)",
      });
    }

    return (
      <div className="flex flex-col">
        <div className="relative">
          {LEADING_ICON && (
            <div
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5",
                {
                  "text-alpha-00": isFocused,
                  "text-alpha-500": !isFocused,
                }
              )}
            >
              {LEADING_ICON}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "peer",
              "flex h-12 w-full px-4 py-3 justify-between items-center rounded-md border border-solid bg-alpha-900",
              {
                "border-rose-500": error,
                "border-alpha-500": !error,
              },
              "focus:outline-none focus:ring-2 focus:ring-alpha-500 focus:border-transparent",
              "disabled:bg-alpha-800 disabled:border-alpha-500 disabled:cursor-not-allowed disabled:text-alpha-500",
              "text-body text-alpha-00 placeholder:text-alpha-500",
              LEADING_ICON && "pl-12",
              TRAILING_ICON && "pr-12",
              className
            )}
            ref={ref}
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {TRAILING_ICON && (
            <div
              className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5",
                {
                  "text-alpha-00": isFocused,
                  "text-alpha-500": !isFocused,
                }
              )}
            >
              {TRAILING_ICON}
            </div>
          )}
        </div>
        {error ? (
          <p className="text-sm text-rose-500 mt-1">{error}</p>
        ) : hint ? (
          <p className="text-sm text-alpha-500 mt-1">{hint}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
