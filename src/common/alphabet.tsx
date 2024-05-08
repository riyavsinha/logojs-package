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
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
} from "../components/glyphs";
import {
  a,
  b,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  p,
  q,
  r,
  t,
  u,
  y,
} from "../components/glyphs";
import { N1, N2, N3, N4, N5, N6, N7, N8, N9 } from "../components/glyphs";
import {
  Alphabet,
  AlphabetLetter,
  MonoglyphAlphbetLetter,
  SymbolMap,
} from "../types";
import { constructSymbolToAlphabetMap } from "./utils";

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

/**
 * A alphabet making use of all available symbols and a variety of colors.
 */
export const CompleteAlphabet: MonoglyphAlphbetLetter[] = [
  { component: A, regex: "A", color: "red" },
  { component: B, regex: "B", color: "maroon" },
  { component: C, regex: "C", color: "blue" },
  { component: D, regex: "D", color: "green" },
  { component: E, regex: "E", color: "olive" },
  { component: F, regex: "F", color: "navy" },
  { component: G, regex: "G", color: "orange" },
  { component: H, regex: "H", color: "teal" },
  { component: I, regex: "I", color: "cadetblue" },
  { component: J, regex: "J", color: "lavender" },
  { component: K, regex: "K", color: "chocolate" },
  { component: L, regex: "L", color: "coral" },
  { component: M, regex: "M", color: "darkolivegreen" },
  { component: N, regex: "N", color: "darkorange" },
  { component: O, regex: "O", color: "gold" },
  { component: P, regex: "P", color: "darkorchid" },
  { component: Q, regex: "Q", color: "darkslateblue" },
  { component: R, regex: "R", color: "firebrick" },
  { component: S, regex: "S", color: "darkslategrey" },
  { component: T, regex: "T", color: "#228b22" },
  { component: U, regex: "U", color: "seagreen" },
  { component: V, regex: "V", color: "indigo" },
  { component: W, regex: "W", color: "mediumseagreen" },
  { component: X, regex: "X", color: "black" },
  { component: Y, regex: "Y", color: "palevioletred" },
  { component: Z, regex: "Z", color: "peru" },
  { component: a, regex: "a", color: "red" },
  { component: b, regex: "b", color: "maroon" },
  { component: C, regex: "c", color: "purple" },
  { component: d, regex: "d", color: "green" },
  { component: e, regex: "e", color: "olive" },
  { component: f, regex: "f", color: "navy" },
  { component: g, regex: "g", color: "orange" },
  { component: h, regex: "h", color: "teal" },
  { component: i, regex: "i", color: "cadetblue" },
  { component: j, regex: "j", color: "lavender" },
  { component: k, regex: "k", color: "chocolate" },
  { component: l, regex: "l", color: "coral" },
  { component: m, regex: "m", color: "darkolivegreen" },
  { component: n, regex: "n", color: "darkorange" },
  { component: O, regex: "o", color: "gold" },
  { component: p, regex: "p", color: "darkorchid" },
  { component: q, regex: "q", color: "darkslateblue" },
  { component: r, regex: "r", color: "firebrick" },
  { component: S, regex: "s", color: "darkslategrey" },
  { component: t, regex: "t", color: "#228b22" },
  { component: u, regex: "u", color: "seagreen" },
  { component: V, regex: "v", color: "indigo" },
  { component: W, regex: "w", color: "mediumseagreen" },
  { component: X, regex: "x", color: "black" },
  { component: y, regex: "y", color: "palevioletred" },
  { component: Z, regex: "z", color: "peru" },
  { component: O, regex: "0", color: "indianred" },
  { component: N1, regex: "1", color: "red" },
  { component: N2, regex: "2", color: "green" },
  { component: N3, regex: "3", color: "purple" },
  { component: N4, regex: "4", color: "navy" },
  { component: N5, regex: "5", color: "teal" },
  { component: N6, regex: "6", color: "gold" },
  { component: N7, regex: "7", color: "olive" },
  { component: N8, regex: "8", color: "slate" },
  { component: N9, regex: "9", color: "firebrick" },
];

export const regexMap: SymbolMap =
  constructSymbolToAlphabetMap(CompleteAlphabet);
