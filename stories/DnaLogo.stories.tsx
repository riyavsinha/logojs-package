import type { Meta, StoryObj } from "@storybook/react";

import { DNALogo } from "../src/logos/DNALogo";
import { CTCF_MOTIF_PPM, SPI1_MOTIF_PFM } from "./motifs";
import { DataType } from "../src/types";

const meta = {
  title: "DNALogo",
  component: DNALogo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof DNALogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CAPMotifIC: Story = {
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
    width: 700,
  },
};

export const CTCFMotifFrequency: Story = {
  args: {
    ...CAPMotifIC.args,
    data: CTCF_MOTIF_PPM,
    mode: "FREQUENCY",
  },
};

export const CustomStartingBase: Story = {
  args: {
    ...CAPMotifIC.args,
    data: [
      [0.06, 0.46, 0.11, 0.37],
      [0.16, 0.22, 0.22, 0.4],
      [0.1, 0.26, 0.16, 0.48],
      [0.08, 0.31, 0.2, 0.41],
      [0.16, 0.2, 0.11, 0.53],
      [0.03, 0.24, 0.11, 0.62],
      [0.07, 0.24, 0.14, 0.55],
      [0.02, 0.43, 0.09, 0.46],
      [0.07, 0.35, 0.2, 0.38],
      [0.11, 0.34, 0.11, 0.44],
      [0.04, 0.33, 0.17, 0.46],
      [0.06, 0.38, 0.15, 0.41],
      [0.05, 0.29, 0.08, 0.58],
      [0.05, 0.38, 0.04, 0.53],
      [0.29, 0.18, 0.17, 0.36],
      [0.02, 0.71, 0, 0.27],
      [1, 0, 0, 0],
      [0, 0, 1, 0],
      [0.16, 0.23, 0.56, 0.05],
    ],
    startPos: -18,
  },
};

export const Bigwig: Story = {
  args: {
    ...CAPMotifIC.args,
    data: [
      [0, 0, 1.3, 0],
      [0, 0, 1, 0],
      [0.8, 0, 0, 0],
      [0, -0.3, 0, 0],
      [-0.5, 0, 0, 0],
      [0, 0, 0, 0.8],
      [0.7, 0, 0, 0],
      [0, 0, 0, 1.3],
    ],
    mode: "RAW",
    dataType: DataType.VALUES,
    PlainLogoProps: {
      negativeAlpha: 1,
    },
  },
};

export const CustomGlyphs: Story = {
  args: {
    ...CAPMotifIC.args,
    alphabet: [
      { color: "#880000", regex: "a" },
      { color: "#008800", regex: "c" },
      { color: "#000088", regex: "g" },
      { color: "#880088", regex: "t" },
    ],
    data: CTCF_MOTIF_PPM,
  },
};

export const SPI1MotifPFM: Story = {
  args: {
    ...CAPMotifIC.args,
    data: SPI1_MOTIF_PFM,
    dataType: DataType.PFM,
    mode: "INFORMATION_CONTENT",
  },
};

export const WithNegativeAlphaModified: Story = {
  args: {
    ...CAPMotifIC.args,
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

export const WithNegativesRightSideUp: Story = {
  args: {
    ...CTCFMotifFrequency.args,
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
      invertedGlyphsRightSideUp: true,
    },
  },
};
