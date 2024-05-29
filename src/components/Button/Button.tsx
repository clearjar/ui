import React, { ReactNode } from "react";
import classNames from "classnames";
import "./button.css";

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
            className={classNames(
                "storybook-button",
                `storybook-button--${size}`,
                `storybook-button--${type}`
            )}
            style={textColor ? { color: textColor } : {}}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

