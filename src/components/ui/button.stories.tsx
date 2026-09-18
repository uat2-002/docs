import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "ACTIONS/Buttons",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: "Button / primary",
  args: {
    children: "Add to List",
    variant: "primary",
  },
};

export const Secondary: Story = {
  name: "Button / secondary",
  args: {
    children: "More Info",
    variant: "secondary",
  },
};

export const AddWithIcon: Story = {
  name: "Button / add (icon + label)",
  args: {
    children: "Add",
    variant: "primary",
    icon: <span>+</span>,
  },
};

export const DisabledState: Story = {
  name: "Button / add – disabled state",
  args: {
    children: "Added",
    variant: "secondary",
    disabled: true,
    icon: <span>✓</span>,
  },
};