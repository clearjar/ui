import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
         variant: {
            control: "select",
            options: ["primary", "soft", "destructive", "outline", 'link'],
            description: "The visual style of the button"
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
            description: "The size of the button"
        },
        disabled: { control: "boolean" },
        children: { control: "text" },
    },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: "primary",
        size: "md",
        children: "Button"
    },
};



