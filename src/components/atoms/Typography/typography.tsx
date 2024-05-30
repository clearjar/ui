import { cva } from "class-variance-authority";

export type TypographyVariants = "default" | "warning" | "danger" | "success" | "muted";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant?: TypographyVariants;
}

export const Typography: React.FC<TextProps> = ({ children, variant = "default", className, ...props }) => {

    const styles = cva("Hellow", {
        variants: {
            variant: {
                default: "text-gray-primary",
                warning: "text-alerts-warning-primary",
                danger: "text-alerts-error-primary",
                success: "text-alerts-success-primary",
                muted: "text-gray-disabled",
            }
        }
    });



    return (
        <p className={styles({ variant, className, })} {...props}>
            {children}
        </p>
    );
};