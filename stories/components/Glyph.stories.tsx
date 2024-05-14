import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Glyph } from "../../src/components/logo/Glyph";
import { A } from "../../src/components/glyphs";

const meta = {
  title: "Components/Glyph",
  component: Glyph,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Glyph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AGlyph: Story = {
  render: (args) => (
    <svg height="100" width="100" style={{ border: "1px solid black" }}>
      <Glyph {...args} />
    </svg>
  ),
  args: {
    xScale: 1,
    yScale: 1,
    children: <A />,
  },
};

export const AGlyphInverted: Story = {
  render: (args) => (
    <svg height="100" width="100" style={{ border: "1px solid black" }}>
      <Glyph {...args} />
    </svg>
  ),
  args: {
    xScale: 1,
    yScale: 1,
    children: <A />,
    inverted: true,
    transform: "translate(0, -100)",
  },
};

export const AGlyphYScaled: Story = {
  render: (args) => (
    <svg height="200" width="100" style={{ border: "1px solid black" }}>
      <Glyph {...args} />
    </svg>
  ),
  args: {
    xScale: 1,
    yScale: 2,
    children: <A />,
  },
};

export const AGlyphXScaled: Story = {
  render: (args) => (
    <svg height="100" width="200" style={{ border: "1px solid black" }}>
      <Glyph {...args} />
    </svg>
  ),
  args: {
    xScale: 2,
    yScale: 1,
    children: <A />,
  },
};
