import { ElementType, ReactNode } from "react";

export type AlphabetLetter = {
  component: ElementType | ElementType[];
  regex: string;
  color: string | string[];
};

export type Alphabet = AlphabetLetter[];

export type GlyphEventInfo = {
  color: string | string[];
  regex: string;
  value: number;
};

export type PositionalGlyphEventInfo = GlyphEventInfo & {
  position: number;
};