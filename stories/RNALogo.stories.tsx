import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { RNALogo } from "../src/logos/RNALogo";
import { DataType } from "../src/types";

const meta = {
  title: "RNALogo",
  component: RNALogo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof RNALogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      [0.7, 0.1, 0.1, 0.1],
      [0, 1, 0, 0],
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0.3, 0.2, 0.3, 0.2],
    ],
    dataType: DataType.PPM,
    width: 700,
  },
};
