import type { Meta, StoryObj } from "@storybook/react";

import { BigWigLogo } from "../../src/logos/BigWigLogo";

const meta = {
  title: "Logos/BigWigLogo",
  component: BigWigLogo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof BigWigLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UsingDataValuesOnly: Story = {
  args: {
    data: [
      [0, 0, 1, 0],
      [0, 0, 0, 1],
      [0, 0.5, 0, 0],
      [0, 0, 0, 0.5],
      [0, 0, 0.2, 0],
      [0.1, 0, 0, 0],
    ],
    width: 700,
  },
};

export const UsingSequenceAndDataValues: Story = {
  args: {
    sequence: "GTCTGA",
    data: [1, 1, 0.5, 0.5, 0.2, 0.1],
    width: 700,
  },
};
