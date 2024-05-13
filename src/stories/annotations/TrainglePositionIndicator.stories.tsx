import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { TrianglePositionIndicator } from "../../components/annotations/TrianglePositionIndicator";
import { Logo } from "../../components/logo/Logo";
import { DNAAlphabet } from "../../common/alphabet";
import { DataType } from "../../types";

const meta = {
  title: "Annotations/TrianglePositionIndicator",
  component: TrianglePositionIndicator,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof TrianglePositionIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const annotation = <TrianglePositionIndicator {...args} />;
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
        RawLogoProps={{
          negativeAlpha: 1,
        }}
        XAxisProps={{ rotation: 0 }}
        showGridLines={true}
        bottomPadding={50}
      ></Logo>
    );
  },
  args: {
    pos: 1,
  },
};

export const WithoutXAxis: Story = {
  render: (args) => {
    const annotation = <TrianglePositionIndicator {...args} />;
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
        RawLogoProps={{
          negativeAlpha: 1,
        }}
        showXAxis={false}
      ></Logo>
    );
  },
  args: {
    ...Default.args,
  },
};
