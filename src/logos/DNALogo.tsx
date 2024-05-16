import { Logo, LogoProps } from "./Logo";
import { UserDefinedAlphabet } from "../types";
import { DNAAlphabet } from "../common/alphabet";

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
