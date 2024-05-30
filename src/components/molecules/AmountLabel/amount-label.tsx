import { Typography, TypographyVariants } from "../../atoms";

export interface AmountLabelProps {
    title: string;
    amount: number;
    currency?: string;
    variant?: TypographyVariants
}

export const AmountLabel: React.FC<AmountLabelProps> = ({ title, amount, currency = "CAD", variant = "default" }) => {

    const AMOUNT = currency ? new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(amount) : amount;

    return (
        <div>
            <Typography className="text-footnote font-medium text-gray-disabled" variant="muted">{title}</Typography>
            <Typography className={`text-body font-bold`} variant={variant}>{AMOUNT}</Typography>
        </div>
    );
}