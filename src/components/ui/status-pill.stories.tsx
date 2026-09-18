import type { Meta, StoryObj } from "@storybook/react";
import { StatusPill } from "./status-pill";

const meta: Meta<typeof StatusPill> = {
  title: "DATA DISPLAY/Status Pills",
  component: StatusPill,
};

export default meta;
type Story = StoryObj<typeof StatusPill>;

export const Watching: Story = {
  args: {
    type: "user",
    status: "watching",
  },
};

export const PlanToWatch: Story = {
  args: {
    type: "user",
    status: "plan_to_watch",
  },
};

export const Watched: Story = {
  args: {
    type: "user",
    status: "watched",
  },
};

export const NotWorthIt: Story = {
  args: {
    type: "user",
    status: "not_worth_it",
  },
};

export const Ongoing: Story = {
  args: {
    type: "series",
    status: "ongoing",
  },
};

export const Ended: Story = {
  args: {
    type: "series",
    status: "ended",
  },
};