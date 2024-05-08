import React from "react";

import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  K,
  L,
  M,
  N,
  P,
  Q,
  R,
  S,
  T,
  V,
  W,
  Y,
  Z,
} from "../glyphs";
import { Logo, LogoProps } from "./Logo";

/**
 * Represents the protein alphabet, with 22 amino acids plus B and Z
 * for N/D and Q/E. Acidic amino acids are red shades, basic amino acids
 * are blue shades, non-polar amino acids are black shades, and B and Z
 * are gold shades.
 */
export const ProteinAlphabet = [
  { component: A, regex: "A", color: "black" },
  { component: B, regex: "B", color: "#bb8800" },
  { component: C, regex: "C", color: "#008811" },
  { component: D, regex: "D", color: "#ff0000" },
  { component: E, regex: "E", color: "#ff0022" },
  { component: F, regex: "F", color: "#333333" },
  { component: G, regex: "G", color: "#007700" },
  { component: H, regex: "H", color: "#220099" },
  { component: I, regex: "I", color: "#111111" },
  { component: K, regex: "K", color: "#0000aa" },
  { component: L, regex: "L", color: "#002222" },
  { component: M, regex: "M", color: "#220022" },
  { component: N, regex: "N", color: "#009911" },
  { component: P, regex: "P", color: "#080808" },
  { component: Q, regex: "Q", color: "#00aa00" },
  { component: R, regex: "R", color: "#0022aa" },
  { component: S, regex: "S", color: "#008f00" },
  { component: T, regex: "T", color: "#006600" },
  { component: V, regex: "V", color: "#222200" },
  { component: W, regex: "W", color: "#080808" },
  { component: Y, regex: "Y", color: "#00a800" },
  { component: Z, regex: "Z", color: "#aaaa00" },
];

export type ProteinLogoProps = Omit<LogoProps, "alphabet">;

/**
 * Renders a logo with the protein alphabet, with amino acids colored according
 * to chemical properties (acidic, basic, and non-polar are red, blue, and black
 * shades, respectively).
 */
export const ProteinLogo = (props: ProteinLogoProps) => (
  <Logo alphabet={ProteinAlphabet} {...props} />
);
