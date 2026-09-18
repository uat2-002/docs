import type { Meta, StoryObj } from "@storybook/react";
import { SeasonProgressBlock } from "./season-progress-block";

const meta: Meta<typeof SeasonProgressBlock> = {
  title: "COMPOSITE/Season Progress Block",
  component: SeasonProgressBlock,
};

export default meta;
type Story = StoryObj<typeof SeasonProgressBlock>;

export const Default: Story = {
  name: "Season Progress Block",
  args: {
    seasonTitle: "Season 2",
    watchedEpisodes: 4,
    totalEpisodes: 8,
  },
};