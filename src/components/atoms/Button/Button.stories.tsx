import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
        disabled: { control: "boolean" },
    },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Primary 😃",
    },
};


