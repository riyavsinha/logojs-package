import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import React from "react";

import { XAxis } from "../components/logo/XAxis";
import DynamicSVGComponent from "../components/logo/DynamicSvg";
import { RawLogo } from "../components/logo/RawLogo";
import { DNAAlphabet } from "../components/logo/DNALogo";

const meta = {
  title: "XAxis",
  component: XAxis,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof XAxis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <XAxis {...args} />
    </DynamicSVGComponent>
  ),
  args: {
    n: 10,
    glyphWidth: 20,
  },
};

export const VerticalLabels: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <XAxis {...args} />
      <g transform="scale(1, 1)">
        <RawLogo
          values={[
            [0.37, 0.08, 0.18, 0.37],
            [0, 0.16, 0.04, 0.8],
            [0.04, 0.02, 0.82, 0.12],
            [0.02, 0.16, 0, 0.82],
            [0.08, 0, 0.84, 0.08],
          ]}
          height={100}
          alphabet={DNAAlphabet}
        />
      </g>
    </DynamicSVGComponent>
  ),
  args: {
    n: 5,
    glyphWidth: 100,
    transform: "translate(-10, 120)",
    rotation: 0,
  },
};

export const LargePositions: Story = {
  render: VerticalLabels.render,
  args: {
    ...VerticalLabels.args,
    rotation: -45,
    startPos: 1847933,
  },
};
