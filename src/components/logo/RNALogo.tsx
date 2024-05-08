import React from "react";

import { A, C, G, U } from "../glyphs";
import { Logo, LogoProps } from "./Logo";
import { UserDefinedAlphabet } from "../../types";

/**
 * Represents the RNA alphabet, with the four nucleotides colored
 * in a similar scheme to the MEME default.
 */
export const RNAAlphabet = [
  { component: A, regex: "A", color: "red" },
  { component: C, regex: "C", color: "blue" },
  { component: G, regex: "G", color: "orange" },
  { component: U, regex: "U", color: "seagreen" },
];

export type RNALogoProps = Omit<LogoProps, "alphabet"> & {
  /** The DNA alphabet to use for the logo. */
  alphabet?: UserDefinedAlphabet;
};

/**
 * Renders a logo with the RNA alphabet, with nucleotides colored similarly to the MEME default.
 */
export const RNALogo = (props: RNALogoProps) => (
  <Logo alphabet={RNAAlphabet} {...props} />
);
