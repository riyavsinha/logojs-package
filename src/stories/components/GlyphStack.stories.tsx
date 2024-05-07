import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { GlyphStack } from "../../components/logo/GlyphStack";
import DynamicSVGComponent from "../../components/logo/DynamicSvg";
import { CompleteAlphabet } from "../../components/logo/completelogo";
import { DNAAlphabet, disymbolAlphabet } from "../..";

const meta = {
  title: "Components/GlyphStack",
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
    <svg height="100" width="100" style={{ border: "1px solid black" }}>
      <GlyphStack {...args} />
    </svg>
  ),
  args: {
    height: 100,
    width: 100,
    alphabet: DNAAlphabet,
    values: [0.1, 0.2, 0.3, 0.4],
    onSymbolMouseOver: fn(),
    onSymbolMouseOut: fn(),
    onSymbolClick: fn(),
  },
};

export const HigherMaxValue: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    maxValue: 2,
  },
};

export const LowerMinValue: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    minValue: -1,
  },
};

export const Negatives: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    values: [-0.1, -0.2, -0.3, -0.4],
    // inverted: true,
    alpha: 0.5,
  },
};

export const NegativesHigherMaxValue: Story = {
  render: Negatives.render,
  args: {
    ...Negatives.args,
    alpha: 0.5,
    maxValue: 1,
  },
};

export const NegativesLowerMinValue: Story = {
  render: Negatives.render,
  args: {
    ...Negatives.args,
    alpha: 0.5,
    minValue: -2,
  },
};

export const NegativesGlyphsRightSideUp: Story = {
  render: Negatives.render,
  args: {
    ...Negatives.args,
    invertedGlyphsRightSideUp: true,
  },
};

export const MixedPositiveNegative: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    values: [0.1, -0.2, 0.3, -0.4],
  },
};

export const MixedPositiveNegativeHigherMaxMin: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    values: [0.1, -0.2, 0.3, -0.4],
    maxValue: 1,
    minValue: -1,
  },
};

export const Dinucleotide: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    indices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    alphabet: disymbolAlphabet(DNAAlphabet),
    values: [0.1, 0.2, 0.3, 0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
};
