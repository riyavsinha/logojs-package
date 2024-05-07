import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
// import React from "react";

import { LogoWithNegatives } from "../components/logo/logowithnegatives";
import { DNAAlphabet } from "..";

console.log(LogoWithNegatives);

const meta = {
  title: "LogoWithNegatives",
  component: LogoWithNegatives,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof LogoWithNegatives>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    values: [
      [1, 0, 0, -1],
      [-2, -0.7, -1, 4.1],
      [-2, -0.5, -1.5, 5],
      [1, -2.5, 2, 0.5],
      [-0.5, 1, -0.5, 0],
      [0, -1, 1.5, -1],
      [0.3, 1.5, -3, 1.5],
      [5, -1, -2, -1.5],
      [4.5, -2, -1, -2.5],
      [-1, 0, 0, 1],
    ],
    width: 700,
    height: 400,
    alphabet: DNAAlphabet,
    onSymbolClick: fn(),
    onSymbolMouseOut: fn(),
    onSymbolMouseOver: fn(),
  },
};
