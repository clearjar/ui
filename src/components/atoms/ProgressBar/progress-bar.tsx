import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import cn from "classnames"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    value: number;
}

const ProgressBar = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(({ className, value, ...props }, ref) => {

    const getProgressColor = (value: number) => {
        if (value > 0.9) {
            return "bg-alerts-error-primary";
        } else if (value < 0.45) {
            return "bg-alerts-success-primary";
        } else {
            return "bg-alerts-warning-primary";
        }
    }

    const progressColor = getProgressColor(value);

    return (
        <ProgressPrimitive.Root
            ref={ref}
            className={cn(
                "relative h-[6px] w-full overflow-hidden rounded-full bg-gray-muted",
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className={cn("h-full transition-all", progressColor)}
                style={{ transform: `translateX(-${100 - (value || 0) * 100}%)` }}
            />
        </ProgressPrimitive.Root>
    )
})
ProgressBar.displayName = ProgressPrimitive.Root.displayName

export { ProgressBar }
