import type { Meta, StoryObj } from "@storybook/react";
import { SearchResultCard } from "./search-result-card";

const meta: Meta<typeof SearchResultCard> = {
  title: "COMPOSITE/Search Result Card",
  component: SearchResultCard,
};

export default meta;
type Story = StoryObj<typeof SearchResultCard>;

export const AlreadyInList: Story = {
  name: "Card / already in list",
  args: {
    title: "Northbound",
    subtitle: "2019 · Drama",
    isAdded: true,
  },
};

export const NotYetAdded: Story = {
  name: "Card / not yet added",
  args: {
    title: "North Wind",
    subtitle: "2022 · Thriller",
    isAdded: false,
  },
};