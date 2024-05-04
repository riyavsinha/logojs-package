import React from "react";

import { A, C, G, T } from "../glyphs";
import { Logo, Logov2 } from "./Logo";
import { Alphabet, DataType, UserDefinedAlphabet } from "../../types";

/**
 * Represents the DNA alphabet, with the four nucleotides colored
 * in a similar scheme to the MEME default.
 */
export const DNAAlphabet: Alphabet = [
  { component: A, regex: "A", color: "red" },
  { component: C, regex: "C", color: "blue" },
  { component: G, regex: "G", color: "orange" },
  { component: T, regex: "T", color: "#228b22" },
];

type DNALogoProps = {
  /** Data matrix to render. The type of data should be specified using `dataType`. */
  data: number[][];
  /** The type of data provided. Either a PPM, PFM, FASTA or already-processed values.  Defaults to `DataType.PPM` */
  dataType?: DataType;
  /** The mode to use when computing letter heights; either information content or frequency. */
  mode?: "INFORMATION_CONTENT" | "FREQUENCY";
  /** Number to assign the first position in the logo; defaults to 1. */
  startpos?: number;
  /** If set, uses an explicit maximum value for the y-axis rather than the total number of bits possible. This is ignored in FREQUENCY mode. */
  yAxisMax?: number;
  /** The width of the logo. */
  width?: number;
  /** The height of the logo. */
  height?: number;
  /** The alphabet to use for the logo. */
  alphabet?: UserDefinedAlphabet;
};

/**
 * Renders a logo with the DNA alphabet, with nucleotides colored similarly to the MEME default.
 */
export const DNALogo = (props: DNALogoProps) => (
  // <Logo alphabet={DNAAlphabet} width="auto" height="auto" {...props} />
  <Logov2
    alphabet={DNAAlphabet}
    width="auto"
    height="auto"
    dataType={DataType.PPM}
    {...props}
  />
);
