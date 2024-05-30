import { FC } from "react";

export interface JSONPrinterProps {
    data: unknown;
    color?: string;
}

export const JSONPrinter: FC<JSONPrinterProps> = ({ data, color = "black" }) => {
    return (
        <pre
            style={{
                color: color,
            }}
        >
            {JSON.stringify(data, null, 2)}
        </pre>
    );
}