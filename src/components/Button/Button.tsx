import React, { ReactNode } from "react";

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type?: "primary" | "secondary";
    /**
     * What background color to use
     */
    textColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    children: ReactNode;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    type = "primary",
    textColor,
    size = "medium",
    onClick,
    children,
}: ButtonProps) => {
    return (
        <button
            type="button"
            className="bg-primary text-white font-bold py-2 px-4 rounded-md"
            style={textColor ? { color: textColor } : {}}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

