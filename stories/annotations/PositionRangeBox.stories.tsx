import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { PositionRangeBox } from "../../src/components/annotations/PositionRangeBox";
import { Logo } from "../../src/logos/Logo";
import { DNAAlphabet } from "../../src/common/alphabet";
import { DataType } from "../../src/types";

const meta = {
  title: "Annotations/PositionRangeBox",
  component: PositionRangeBox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof PositionRangeBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const annotation = <PositionRangeBox {...args} />;
    return (
      <Logo
        data={[
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
        ]}
        dataType={DataType.VALUES}
        mode="RAW"
        width={700}
        height={400}
        alphabet={DNAAlphabet}
        annotations={[annotation]}
        PlainLogoProps={{
          negativeAlpha: 1,
        }}
      ></Logo>
    );
  },
  args: {
    startPos: 1,
    endPos: 4,
  },
};

export const FitToValues: Story = {
  render: Default.render,
  args: {
    ...Default.args,
    heightType: "fit",
  },
};

export const FitToValuesSymmetric: Story = {
  render: Default.render,
  args: {
    ...Default.args,
    heightType: "fitSymmetric",
  },
};

export const WithBorder: Story = {
  render: Default.render,
  args: {
    ...Default.args,
    stroke: "black",
    fill: "none",
    strokeWidth: 4,
  },
};

export const WithPadding: Story = {
  render: Default.render,
  args: {
    ...Default.args,
    widthPadding: 10,
    heightPadding: 5,
  },
};

export const WithColor: Story = {
  render: Default.render,
  args: {
    ...Default.args,
    fill: "lightcyan",
  },
};
