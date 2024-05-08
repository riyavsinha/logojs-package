import React from "react";

import { Logo, LogoProps } from "./Logo";
import { ProteinAlphabet } from "../../common/alphabet";

export type ProteinLogoProps = Omit<LogoProps, "alphabet">;

/**
 * Renders a logo with the protein alphabet, with amino acids colored according
 * to chemical properties (acidic, basic, and non-polar are red, blue, and black
 * shades, respectively).
 */
export const ProteinLogo = (props: ProteinLogoProps) => (
  <Logo alphabet={ProteinAlphabet} {...props} />
);
