import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { RawLogo } from "../components/logo/RawLogo";
import DynamicSVGComponent from "../components/logo/DynamicSvg";
import { DNAAlphabet, disymbolAlphabet } from "..";

const meta = {
  title: "RawLogo",
  component: RawLogo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    controls: {
      sort: "requiredFirst",
    },
  },
} satisfies Meta<typeof RawLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <RawLogo {...args} />
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

export const CustomStackHeights: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    stackHeights: [0.5, 0.5],
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
