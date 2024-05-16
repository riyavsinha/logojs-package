import { Logo, LogoProps } from "./Logo";
import { UserDefinedAlphabet } from "../types";
import { CompleteAlphabet } from "../common/alphabet";

export type CompleteLogoProps = Omit<LogoProps, "alphabet"> & {
  /** The Complete alphabet to use for the logo. */
  alphabet?: UserDefinedAlphabet;
};

/**
 * Renders a logo with the Complete alphabet, with nucleotides colored similarly to the MEME default.
 */
export const CompleteLogo = (props: CompleteLogoProps) => (
  <Logo alphabet={CompleteAlphabet} {...props} />
);
