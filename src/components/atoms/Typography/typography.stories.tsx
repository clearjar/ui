import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof Typography> = {
    title: "Atoms/Typography",
    component: Typography,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['default', 'warning', 'danger', 'success']
            }
        },
    },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
    args: {
        children: "Default Text 😃",
    },
};

export const Warning: Story = {
    args: {
        children: "Warning Text 😃",
        variant: "warning"
    },
};

export const Danger: Story = {
    args: {
        children: "Danger Text 😃",
        variant: "danger"
    },
};

export const Success: Story = {
    args: {
        children: "Success Text 😃",
        variant: "success"
    },
};

