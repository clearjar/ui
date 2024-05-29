import React from "react";
import cn from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    children,
    className,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                "bg-primary text-white font-bold py-2 px-4 rounded-md",
                {
                    "opacity-50 cursor-not-allowed": disabled,
                    "bg-gray-400": disabled
                },
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
