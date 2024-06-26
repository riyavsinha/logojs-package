import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { XAxisLabels } from "../../src/components/axes/XAxisLabels";
import DynamicSVGComponent from "../../src/components/helper/DynamicSvg";
import { PlainLogo } from "../../src/components/logo/PlainLogo";
import { DNAAlphabet } from "../../src/common/alphabet";

const meta = {
  title: "Components/XAxisLabels",
  component: XAxisLabels,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof XAxisLabels>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <XAxisLabels {...args} />
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
      <XAxisLabels {...args} />
      <PlainLogo
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
    </DynamicSVGComponent>
  ),
  args: {
    n: 5,
    glyphWidth: 100,
    transform: "translate(0, 120)",
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

export const CustomLabels: Story = {
  render: VerticalLabels.render,
  args: {
    ...VerticalLabels.args,
    labels: ["E77", "R90", "M101", "K299", "Y401"],
    rotation: -45,
  },
};
