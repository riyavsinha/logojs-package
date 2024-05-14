import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { PlainLogo } from "../../src/components/logo/PlainLogo";
import DynamicSVGComponent from "../../src/components/logo/DynamicSvg";
import { DNAAlphabet, disymbolAlphabet } from "../../src";
import { CTCF_MOTIF_PPM } from "../motifs";

const meta = {
  title: "Components/PlainLogo",
  component: PlainLogo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    controls: {
      sort: "requiredFirst",
    },
  },
} satisfies Meta<typeof PlainLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <PlainLogo {...args} />
    </DynamicSVGComponent>
  ),
  args: {
    values: [
      [0.1, 0.2, 0.3, 0.4],
      [0.5, 0, 0.2, 0],
    ],
    alphabet: DNAAlphabet,
    height: 200,
    glyphWidth: 100,
    onSymbolClick: fn(),
    onSymbolMouseOut: fn(),
    onSymbolMouseOver: fn(),
  },
};

export const Dinucleotide: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    values: [
      [0.1, 0.2, 0, 0.4, 0.5, 0, 0, 0.8, 0.1, 0, 0.3, 0, 0.5, 0, 0.7, 0.8],
      [0.5, 0.1, 0.2, 0.1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    alphabet: disymbolAlphabet(DNAAlphabet),
    height: 200,
    glyphWidth: 100,
  },
};

export const CTCF: Story = {
  render: (args) => {
    return (
      <svg viewBox="0 0 1900 100" width={400} height={100}>
        <PlainLogo {...args} />
      </svg>
    );
  },
  args: {
    ...Basic.args,
    values: CTCF_MOTIF_PPM,
    glyphWidth: 100,
    height: 100,
  },
};

export const WithNegatives: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
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
    height: 75,
  },
};
