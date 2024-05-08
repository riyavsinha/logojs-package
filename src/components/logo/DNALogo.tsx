import React from "react";

import { A, C, G, T } from "../glyphs";
import { Logo, LogoProps } from "./Logo";
import { Alphabet, UserDefinedAlphabet } from "../../types";

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

export type DNALogoProps = Omit<LogoProps, "alphabet"> & {
  /** The DNA alphabet to use for the logo. */
  alphabet?: UserDefinedAlphabet;
};

/**
 * Renders a logo with the DNA alphabet, with nucleotides colored similarly to the MEME default.
 */
export const DNALogo = (props: DNALogoProps) => (
  <Logo alphabet={DNAAlphabet} {...props} />
);
