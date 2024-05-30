import type { Meta, StoryObj } from "@storybook/react";
import { SpendLimitCard } from "./spend-limit-card";

const meta: Meta<typeof SpendLimitCard> = {
    title: "Organisms/SpendLimitCard",
    component: SpendLimitCard,
    argTypes: {}
}

export default meta

type story = StoryObj<typeof SpendLimitCard>

export const Default: story = {
    args: {
        icon: "😂",
        limit: 1000,
        spent: 500,
        id: "1",
        name: "Groceries"
    }
}

export const Exceeded: story = {
    args: {
        icon: "😂",
        limit: 1000,
        spent: 1500,
        id: "2",
        name: "Groceries"
    }
}