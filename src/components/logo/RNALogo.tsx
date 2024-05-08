import React from "react";

import { Logo, LogoProps } from "./Logo";
import { UserDefinedAlphabet } from "../../types";
import { RNAAlphabet } from "../../common/alphabet";

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
