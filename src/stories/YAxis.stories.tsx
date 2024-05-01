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

export const Basic: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <YAxis {...args} />
    </DynamicSVGComponent>
  ),
  args: {
    bits: 2,
    transform: "translate(50, 50)",
    height: 100,
    width: 20,
  },
};
