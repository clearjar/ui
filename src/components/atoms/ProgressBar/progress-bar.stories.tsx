import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./progress-bar";

// Default metadata of the story https://storybook.js.org/docs/react/api/csf#default-export
const meta: Meta<typeof ProgressBar> = {
    title: "Atoms/ProgressBar",
    component: ProgressBar,
    argTypes: {
        value: {
            control: {
                type: 'range',
                min: 0,
                max: 1,
                step: 0.01,
            }
        },
    },
};

export default meta;

// The story type for the component https://storybook.js.org/docs/react/api/csf#named-story-exports
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
    args: {
        value: 0.5,
    },
};

export const LowProgress: Story = {
    args: {
        value: 0.3,
    },
};

export const HighProgress: Story = {
    args: {
        value: 0.95,
    },
};

export const FullProgress: Story = {
    args: {
        value: 1,
    },
};
