import { ElementType, ReactNode } from "react";

export type WithRequired<T, K extends keyof T> = Partial<T> & {
  [P in K]-?: T[P];
};

export type MonoglyphAlphbetLetter = {
  component: ElementType;
  regex: string;
  color: string;
};

export type MultiglyphAlphabetLetter = {
  component: ElementType[];
  regex: string;
  color: string | string[];
};

export type AlphabetLetter = MonoglyphAlphbetLetter | MultiglyphAlphabetLetter;
export type Alphabet = AlphabetLetter[];

export type UserDefinedAlphabetLetter = WithRequired<AlphabetLetter, "regex">;
export type UserDefinedAlphabet = UserDefinedAlphabetLetter[];

export type SymbolMap = { [key: string]: UserDefinedAlphabetLetter };

export type GlyphEventInfo = {
  color: string | string[];
  regex: string;
  value: number;
};

export type PositionalGlyphEventInfo = GlyphEventInfo & {
  position: number;
};

export enum DataType {
  PFM = "PFM",
  PPM = "PPM",
  VALUES = "VALUES",
  FASTA = "FASTA",
}

export type LogoMode = "INFORMATION_CONTENT" | "FREQUENCY" | "RAW";
