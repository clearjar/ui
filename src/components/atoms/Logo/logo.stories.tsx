import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";

const meta: Meta<typeof Logo> = {
    title: "Atoms/Logo",
    component: Logo,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['black', 'white', 'brand'],
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const SmallBlackLogo: Story = {
    args: {
        size: "small",
        color: "black",
    },
};

export const MediumWhiteLogo: Story = {
    args: {
        size: "medium",
        color: "white",
    },
};

export const LargeBrandLogo: Story = {
    args: {
        size: "large",
        color: "brand",
    },
};

export const CustomLogo: Story = {
    args: {
        size: "medium",
        color: "black",
    },
};
