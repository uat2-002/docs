import type { Meta, StoryObj } from "@storybook/react";
import { MediaCard } from "./media-card";

const meta: Meta<typeof MediaCard> = {
  title: "COMPOSITE/Media Card",
  component: MediaCard,
};

export default meta;
type Story = StoryObj<typeof MediaCard>;

export const Watching: Story = {
  name: "Card / watching – play badge + progress line",
  args: {
    title: "Northbound",
    subtitle: "Season 2 · Episode 4 of 8",
    status: "watching",
    progress: 45,
  },
};

export const Watched: Story = {
  name: "Card / watched – check badge",
  args: {
    title: "Autumn Light",
    subtitle: "3 seasons · ended",
    status: "watched",
  },
};

export const NotWorthIt: Story = {
  name: "Card / not worth it – dimmed thumb",
  args: {
    title: "City Clock",
    subtitle: "1 season · canceled",
    status: "not_worth_it",
  },
};