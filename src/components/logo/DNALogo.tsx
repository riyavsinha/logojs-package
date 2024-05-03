import React from "react";

import { A, C, G, T } from "../glyphs";
import { Logo } from "./Logo";

/**
 * Represents the DNA alphabet, with the four nucleotides colored
 * in a similar scheme to the MEME default.
 */
export const DNAAlphabet = [
  { component: A, regex: "A", color: "red" },
  { component: C, regex: "C", color: "blue" },
  { component: G, regex: "G", color: "orange" },
  { component: T, regex: "T", color: "#228b22" },
];

type DNALogoProps = {
  /** Position probability matrix. Rows are positions and should sum to 1.0; columns are nucleotides,
   *           alphabetically. If this is provided, it takes precedence over PFM in computing symbol heights. */
  ppm?: number[][];
  /** Position frequency matrix. Rows are positions and columns are nucleotides, alphabetically. */
  pfm?: number[][];
  /** The mode to use when computing letter heights; either information content or frequency. */
  mode?: "INFORMATION" | "FREQUENCY";
  /** Number to assign the first position in the logo; defaults to 1. */
  startpos?: number;
  /** If set, uses an explicit maximum value for the y-axis rather than the total number of bits possible. This is ignored in FREQUENCY mode. */
  yAxisMax?: number;
  /** The width of the logo. */
  width?: number;
  /** The height of the logo. */
  height?: number;
};

/**
 * Renders a logo with the DNA alphabet, with nucleotides colored similarly to the MEME default.
 */
export const DNALogo = (props: DNALogoProps) => (
  <Logo alphabet={DNAAlphabet} width="auto" height="auto" {...props} />
);
