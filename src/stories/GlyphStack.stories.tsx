import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { GlyphStack } from "../components/logo/GlyphStack";
import DynamicSVGComponent from "../components/logo/DynamicSvg";
import { CompleteAlphabet } from "../components/logo/completelogo";
import { DNAAlphabet, disymbolAlphabet } from "..";

const meta = {
  title: "GlyphStack",
  component: GlyphStack,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof GlyphStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <GlyphStack {...args} />
    </DynamicSVGComponent>
  ),
  args: {
    height: 100,
    width: 100,
    indices: [0, 1, 2, 3],
    alphabet: DNAAlphabet,
    values: [0.1, 0.2, 0.3, 0.4],
    transform: "",
    inverted: false,
  },
};

export const Dinucleotide: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <GlyphStack {...args} />
    </DynamicSVGComponent>
  ),
  args: {
    height: 100,
    width: 100,
    indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    alphabet: disymbolAlphabet(DNAAlphabet),
    values: [0.1, 0.2, 0.3, 0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    transform: "",
    inverted: false,
  },
};
