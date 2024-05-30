import React, { FC } from "react";
import { AmountLabel, TransactionIcon } from "../../molecules";
import { ProgressBar, Typography } from "../../atoms";

export interface SpendLimtCardProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    icon: string;
    spent: number;
    limit: number;
    name: string;
}

export const SpendLimitCard: FC<SpendLimtCardProps> = ({ icon, id, limit, name, spent, ...rest }) => {

    const hasPassedLimit = spent >= limit;

    return (
        <div key={id} className="space-y-3 w-full hover:bg-gray-50 cursor-pointer p-4" {...rest}>
            <div className="flex justify-between items-center space-x-10">
                <div className="flex space-x-2">
                    <TransactionIcon icon={icon} size="small" />
                    <Typography className="text-body font-medium">{name}</Typography>
                </div>
                <ProgressBar value={spent / limit} />
            </div>
            <div className="flex justify-between">
                <AmountLabel title="Spent" amount={spent} />
                {hasPassedLimit ? <AmountLabel title="Exceeded By" amount={spent - limit} variant="danger" /> : <AmountLabel title="Remaining" amount={limit - spent} />}
                <AmountLabel title="Limit" amount={limit} />
            </div>
        </div>
    );
}