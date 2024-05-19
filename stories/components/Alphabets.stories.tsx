import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Glyph } from "../../src/components/logo/Glyph";
import { A } from "../../src/components/glyphs";
import DynamicSVGComponent from "../../src/components/helper/DynamicSvg";
import { AlphabetDisplay } from "../../src/components/helper/AlphabetDisplay";
import {
  CompleteAlphabet,
  DNAAlphabet,
  ProteinAlphabet,
  RNAAlphabet,
} from "../../src";

const meta = {
  title: "Components/Alphabets",
  component: AlphabetDisplay,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof AlphabetDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DNAAlphabetDisplay: Story = {
  render: (args) => (
    <DynamicSVGComponent>
      <AlphabetDisplay {...args} />
    </DynamicSVGComponent>
  ),
  args: {
    alphabet: DNAAlphabet,
    height: 100,
  },
};

export const ProteinAlphabetDisplay: Story = {
  render: DNAAlphabetDisplay.render,
  args: {
    ...DNAAlphabetDisplay.args,
    alphabet: ProteinAlphabet,
    glyphWidth: 40,
  },
};

export const RNAAlphabetDisplay: Story = {
  render: DNAAlphabetDisplay.render,
  args: {
    ...DNAAlphabetDisplay.args,
    alphabet: RNAAlphabet,
  },
};

export const CompleteAlphabetDisplay: Story = {
  render: DNAAlphabetDisplay.render,
  args: {
    ...DNAAlphabetDisplay.args,
    alphabet: CompleteAlphabet,
    glyphWidth: 25,
  },
};
