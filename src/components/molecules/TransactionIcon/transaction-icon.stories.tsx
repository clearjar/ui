import type { Meta, StoryObj } from "@storybook/react";
import { TransactionIcon } from "./transaction-icon";
const meta: Meta<typeof TransactionIcon> = {
    title: "Molecules/TransactionIcon",
    component: TransactionIcon,
    argTypes: {
        category: {
            control: {
                type: 'text'
            }
        },
        imageUrl: {
            control: {
                type: 'text'
            }
        },
        size: {
            control: {
                type: 'select',
                options: ["small", "medium", "large"]
            }
        }
    }
}

export default meta

type story = StoryObj<typeof TransactionIcon>

export const Small: story = {
    args: {
        category: "food_and_drink",
        imageUrl: "",
        size: "small",
    }
}

export const Medium: story = {
    args: {
        category: "food_and_drink",
        imageUrl: "",
        size: "medium",
    }
}

export const Large: story = {
    args: {
        category: "food_and_drink",
        imageUrl: "",
        size: "large",
    }
}
