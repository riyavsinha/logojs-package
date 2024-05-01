import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { XAxis } from "../components/logo/XAxis";

const meta = {
  title: "XAxis",
  component: XAxis,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
} satisfies Meta<typeof XAxis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <svg>
      <XAxis {...args} />
    </svg>
  ),
  args: {
    n: 10,
    transform: "translate(50, 50)",
    glyphWidth: 20,
    startpos: 0,
  },
};
