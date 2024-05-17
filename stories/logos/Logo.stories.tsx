import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Logo } from "../../src/logos/Logo";
import { DNAAlphabet, disymbolAlphabet } from "../../src";
import { DataType } from "../../src/types";
import { SPI1_MOTIF_FASTA, SPI1_MOTIF_PFM } from "../motifs";

const meta = {
  title: "Logos/Logo",
  component: Logo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: [
      [0.37, 0.08, 0.18, 0.37],
      [0, 0.16, 0.04, 0.8],
      [0.04, 0.02, 0.82, 0.12],
      [0.02, 0.16, 0, 0.82],
      [0.08, 0, 0.84, 0.08],
      [0.88, 0.06, 0.06, 0],
      [0.12, 0.2, 0.18, 0.49],
      [0.18, 0.35, 0.2, 0.27],
      [0.18, 0.31, 0.1, 0.41],
      [0.31, 0.14, 0.35, 0.2],
      [0.2, 0.16, 0.43, 0.2],
      [0.33, 0.22, 0.14, 0.31],
      [0.12, 0.06, 0.14, 0.67],
      [0.14, 0.8, 0, 0.06],
      [0.71, 0.02, 0.2, 0.06],
      [0.2, 0.65, 0, 0.14],
      [0.67, 0.08, 0.12, 0.12],
      [0.24, 0.18, 0.14, 0.43],
      [0.37, 0.02, 0, 0.61],
    ],
    dataType: DataType.PPM,
    mode: "INFORMATION_CONTENT",
    width: 700,
    height: 400,
    alphabet: DNAAlphabet,
    onSymbolClick: fn(),
    onSymbolMouseOut: fn(),
    onSymbolMouseOver: fn(),
  },
};

export const Frequency: Story = {
  args: {
    ...Basic.args,
    mode: "FREQUENCY",
  },
};

export const Dinucleotide: Story = {
  args: {
    data: [
      [0, 0, 0.25, 0, 0, 0, 0, 0.25, 0.25, 0, 0, 0, 0, 0, 0.25, 0],
      [0, 0, 0, 0.4, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.2, 0],
      [0, 0, 0, 0.3, 0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0.5, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0.5, 0],
      [0, 0, 0.5, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0.25, 0, 0.25, 0, 0.2, 0, 0, 0.1, 0, 0, 0.1, 0.1, 0, 0],
    ],
    dataType: DataType.PPM,
    mode: "INFORMATION_CONTENT",
    width: 700,
    height: 400,
    alphabet: disymbolAlphabet(DNAAlphabet),
    onSymbolClick: fn(),
    onSymbolMouseOut: fn(),
    onSymbolMouseOver: fn(),
  },
};

export const UsingPFM: Story = {
  args: {
    ...Basic.args,
    data: SPI1_MOTIF_PFM,
    dataType: DataType.PFM,
  },
};

export const UsingFasta: Story = {
  args: {
    ...Basic.args,
    data: SPI1_MOTIF_FASTA,
    dataType: DataType.FASTA,
  },
};

export const WithNegatives: Story = {
  args: {
    ...Basic.args,
    data: [
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
    ],
    mode: "RAW",
    dataType: DataType.VALUES,
    PlainLogoProps: {
      negativeAlpha: 0.2,
    },
  },
};

export const WithSetMaxMinValues: Story = {
  args: {
    ...WithNegatives.args,
    yAxisMax: 7,
    yAxisMin: -7,
  },
};

export const CpgMethylationExample: Story = {
  args: {
    ...Basic.args,
    data: [
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0.3, 0, 0.3, 0.4, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1],
      [0, 0.6, 0, 0.4, 0, 0],
      [1, 0, 0, 0, 0, 0],
    ],
    dataType: DataType.PPM,
    alphabet: [
      { color: "#880088", regex: "A" },
      { color: "#880000", regex: "C" },
      { color: "#000088", regex: "G" },
      { color: "#888800", regex: "T" },
      { color: "#ff0000", regex: "M" },
      { color: "#008888", regex: "W" },
    ],
  },
};

export const CustomSymbolsExample: Story = {
  args: {
    ...Basic.args,
    data: [
      [0.5, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0],
      [0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0],
      [0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0],
      [0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0],
      [0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0],
      [0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.5, 0],
      [0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0.5],
    ],
    dataType: DataType.PPM,
    alphabet: [
      { color: "#880000", regex: "a" },
      { color: "#880000", regex: "b" },
      { color: "#880000", regex: "c" },
      { color: "#880000", regex: "d" },
      { color: "#880000", regex: "e" },
      { color: "#880000", regex: "f" },
      { color: "#000088", regex: "1" },
      { color: "#000088", regex: "2" },
      { color: "#000088", regex: "3" },
      { color: "#000088", regex: "4" },
      { color: "#000088", regex: "5" },
      { color: "#000088", regex: "6" },
      { color: "#000088", regex: "7" },
      { color: "#000088", regex: "8" },
      { color: "#000088", regex: "9" },
      { color: "#000088", regex: "0" },
    ],
  },
};

export const RepeatedSymbolsExample: Story = {
  args: {
    ...Basic.args,
    data: [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1],
    ],
    dataType: DataType.PPM,
    alphabet: [
      { regex: "A", color: "#ff0000" },
      { regex: "A", color: "#ffa500" },
      { regex: "A", color: "#ffcc00" },
      { regex: "A", color: "#008800" },
      { regex: "A", color: "#0000aa" },
      { regex: "A", color: "#aa00aa" },
    ],
  },
};
