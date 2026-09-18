import type { Meta, StoryObj } from "@storybook/react";
import { EpisodeRow } from "./episode-row";

const meta: Meta<typeof EpisodeRow> = {
  title: "COMPOSITE/Episode Row",
  component: EpisodeRow,
};

export default meta;
type Story = StoryObj<typeof EpisodeRow>;

export const Watched: Story = {
  name: "Row / watched (left)",
  args: {
    episodeNumber: "Ep. 1",
    title: "The Return",
    isWatched: true,
  },
};

export const Unwatched: Story = {
  name: "Row / unwatched (right)",
  args: {
    episodeNumber: "Ep. 2",
    title: "The Old House",
    isWatched: false,
  },
};