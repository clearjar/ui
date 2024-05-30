import type { Meta, StoryObj } from "@storybook/react";
import { AmountLabel } from "./amount-label";
const meta: Meta<typeof AmountLabel> = {
    title: "Molecules/AmountLabel",
    component: AmountLabel,
    argTypes: {
        amount: {
            control: {
                type: 'number'
            }
        },
        currency: {
            control: {
                type: 'text'
            }
        },
        title: {
            control: {
                type: 'text'
            }
        },
        variant: {
            control: {
                type: 'select',
                options: ["default", "muted", "danger"]
            }
        }
    }
}

export default meta

type story = StoryObj<typeof AmountLabel>

export const Default: story = {
    args: {
        amount: 1000,
        currency: "USD",
        title: "Spent"
    }
}

export const Danger: story = {
    args: {
        amount: 1000,
        currency: "USD",
        title: "Spent",
    }
}

