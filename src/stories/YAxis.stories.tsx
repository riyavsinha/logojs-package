import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { YAxis } from "../components/logo/YAxis";
import DynamicSVGComponent from "../components/logo/DynamicSvg";

const meta = {
  title: "YAxis",
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
