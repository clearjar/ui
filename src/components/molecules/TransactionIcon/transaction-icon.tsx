import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { getTransactionIcon } from '../../../utils';

const styles = cva("flex items-center justify-center bg-gray-200", {
    variants: {
        size: {
            small: "w-6 h-6 rounded-md",
            medium: "w-8 h-8 rounded-md",
            large: "w-12 h-12 rounded-md",
        }
    }
})

const imgSizeStyles = cva("", {
    variants: {
        size: {
            small: "w-4 h-4",
            medium: "w-6 h-6",
            large: "w-10 h-10",
        }
    }
});

const spanSizeStyles = cva("flex items-center justify-center", {
    variants: {
        size: {
            small: "text-xs",
            medium: "text-xl",
            large: "text-3xl",
        }
    }
});

export interface TransactionIconProps extends VariantProps<typeof styles> {
    imageUrl?: string;
    category: string;
}

export const TransactionIcon: React.FC<TransactionIconProps> = ({ imageUrl, category, size = "medium" }) => {

    const transactionIcon = getTransactionIcon(category);

    return (
        <div className={styles({ size })}>
            {imageUrl ? (
                <img src={imageUrl} alt={category} className={imgSizeStyles({ size })} />
            ) : (
                <span className={spanSizeStyles({ size })}>{transactionIcon}</span> // Default emoji if category not found
            )}
        </div>
    );
};
