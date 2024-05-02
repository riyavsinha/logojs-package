import { ElementType, ReactNode } from "react";

export type AlphabetLetter = {
  component: ElementType | ElementType[];
  regex: string;
  color: string | string[];
};

export type Alphabet = AlphabetLetter[];
