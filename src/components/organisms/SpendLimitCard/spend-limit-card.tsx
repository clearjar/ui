import { FC } from "react";

export interface SpendLimtCardProps {
    id: string;
    icon: string;
    spent: number;
    limit: number;
    name: string;
}

export const SpendLimitCard: FC<SpendLimtCardProps> = ({ }) => {
    return (
        <div>
            <div>
                <span>

                </span>
            </div>
        </div>
    );
}