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
        icon: "👋🏽",
        limit: 1000,
        spent: 500,
    }
}

