import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { YGridlines } from "../../components/logo/YGridlines";
import DynamicSVGComponent from "../../components/logo/DynamicSvg";
import { DNAAlphabet } from "../../common/alphabet";
import { RawLogo } from "../..";

const meta = {
  title: "Components/YGridlines",
  component: YGridlines,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof YGridlines>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <YGridlines {...args} />
    </DynamicSVGComponent>
  ),
  args: {
    xEnd: 100,
    yEnd: 100,
    numGridlines: 5,
    stroke: "black",
  },
};

export const RedStroke: Story = {
  render: Basic.render,
  args: {
    ...Basic.args,
    xEnd: 200,
    yEnd: 200,
    stroke: "red",
  },
};

export const OnLogo: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <YGridlines {...args} />
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
    </DynamicSVGComponent>
  ),
  args: {
    xEnd: 500,
    yEnd: 100,
    numGridlines: 5 * 4,
    stroke: "black",
  },
};
