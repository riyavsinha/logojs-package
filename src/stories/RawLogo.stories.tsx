import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { RawLogo } from "../components/logo/logo";
import DynamicSVGComponent from "../components/logo/DynamicSvg";
import { CompleteAlphabet } from "../components/logo/completelogo";

const meta = {
  title: "RawLogo",
  component: RawLogo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
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
      [0.5, 0.1, 0.2, 0.1],
    ],
    glyphWidth: 10,
    stackHeights: [30, 20],
    alphabet: CompleteAlphabet,
    onSymbolClick: fn(),
    onSymbolMouseOut: fn(),
    onSymbolMouseOver: fn(),
  },
};
