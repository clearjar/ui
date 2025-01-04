import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { GlobalEdit, InfoCircle } from "iconsax-react";

const meta: Meta<typeof Input> = {
    title: "Atoms/TextInput",
    component: Input,
    argTypes: {
        disabled: { control: "boolean" },
        label: { control: "text" },
        hint: { control: "text" },
        error: { control: "text" },
        leadingIcon: { control: "text" },
        trailingIcon: { control: "text" },
    }
};

export default meta;

type Story = StoryObj<typeof Input>;


export const TextInput: Story = {
    args: {
        placeholder: "Type here...",
    },
}

export const PasswordInput: Story = {
    args: {
        type: "password",
        placeholder: "Enter your password...",
    },
}

export const EmailInput: Story = {
    args: {
        type: "email",
        placeholder: "Enter your email...",
    },
}

export const FileInput: Story = {
    args: {
        type: "file",
        placeholder: "Upload a file...",
    },
}

export const LeadingIcon: Story = {
    args: {
        leadingIcon: <GlobalEdit variant="Bold" />,
        placeholder: "Type here...",
    },
}

export const TrailingIcon: Story = {
    args: {
        trailingIcon: <InfoCircle variant="Bold" />,
    },
}

export const Error: Story = {
    args: {
        error: "This is an error",
        leadingIcon: <GlobalEdit variant="Bold" />,
        trailingIcon: <InfoCircle variant="Bold" />,
    },
}