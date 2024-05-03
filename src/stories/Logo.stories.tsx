import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
// import React from "react";

import { Logo } from "../components/logo/Logo";
import { DNAAlphabet, disymbolAlphabet } from "..";

const meta = {
  title: "Logo",
  component: Logo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  // render: (args) => <Logo {...args} />,
  args: {
    ppm: [
      [0.37, 0.08, 0.18, 0.37],
      [0, 0.16, 0.04, 0.8],
      [0.04, 0.02, 0.82, 0.12],
      [0.02, 0.16, 0, 0.82],
      [0.08, 0, 0.84, 0.08],
      [0.88, 0.06, 0.06, 0],
      [0.12, 0.2, 0.18, 0.49],
      [0.18, 0.35, 0.2, 0.27],
      [0.18, 0.31, 0.1, 0.41],
      [0.31, 0.14, 0.35, 0.2],
      [0.2, 0.16, 0.43, 0.2],
      [0.33, 0.22, 0.14, 0.31],
      [0.12, 0.06, 0.14, 0.67],
      [0.14, 0.8, 0, 0.06],
      [0.71, 0.02, 0.2, 0.06],
      [0.2, 0.65, 0, 0.14],
      [0.67, 0.08, 0.12, 0.12],
      [0.24, 0.18, 0.14, 0.43],
      [0.37, 0.02, 0, 0.61],
    ],
    mode: "INFORMATION_CONTENT",
    width: 100,
    height: 100,
    alphabet: DNAAlphabet,
    onSymbolClick: fn(),
    onSymbolMouseOut: fn(),
    onSymbolMouseOver: fn(),
  },
};

export const Dinucleotide: Story = {
  args: {
    ppm: [
      [0, 0, 0.25, 0, 0, 0, 0, 0.25, 0.25, 0, 0, 0, 0, 0, 0.25, 0],
      [0, 0, 0, 0.4, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0],
      [0, 0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0.5, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0.5, 0],
      [0, 0, 0.5, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0.25, 0, 0.25, 0, 0.2, 0, 0, 0.1, 0, 0, 0.1, 0.1, 0, 0],
    ],
    mode: "INFORMATION_CONTENT",
    width: 100,
    height: 100,
    alphabet: disymbolAlphabet(DNAAlphabet),
    onSymbolClick: fn(),
    onSymbolMouseOut: fn(),
    onSymbolMouseOver: fn(),
  },
};
