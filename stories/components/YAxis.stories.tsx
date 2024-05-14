import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { YAxis } from "../../src/components/logo/YAxis";
import DynamicSVGComponent from "../../src/components/logo/DynamicSvg";

const meta = {
  title: "Components/YAxis",
  component: YAxis,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof YAxis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DNABits: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <YAxis {...args} />
    </DynamicSVGComponent>
  ),
  args: {
    max: 2,
    height: 100,
    width: 75,
  },
};

export const WithNegatives: Story = {
  render: DNABits.render,
  args: {
    ...DNABits.args,
    min: -2,
    label: "value",
  },
};

export const DecimalMaxMin: Story = {
  render: DNABits.render,
  args: {
    ...DNABits.args,
    min: -3.5,
    max: 3.5,
    height: 250,
    label: "value",
  },
};

export const Frequency: Story = {
  render: DNABits.render,
  args: {
    max: 1,
    numTicks: 2,
    height: 100,
    width: 75,
    label: "frequency",
  },
};

export const NonSymmetricPositiveNegative: Story = {
  render: DNABits.render,
  args: {
    max: 3,
    min: -1,
    height: 100,
    width: 75,
    label: "values",
    symmetric: false,
  },
};
