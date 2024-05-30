import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
    title: "Atoms/TextInput",
    component: Input,
    argTypes: {
        disabled: { control: "boolean" },
        label: { control: "text" },
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