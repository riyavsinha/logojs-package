import { Alphabet } from "../types";

export const disymbolAlphabet = (x: Alphabet) => {
  let alphabet = [] as Alphabet;
  x.forEach((ix) => {
    x.forEach((jx) => {
      if (
        Array.isArray(ix.component) ||
        Array.isArray(jx.component) ||
        Array.isArray(ix.color) ||
        Array.isArray(jx.color)
      ) {
        throw new Error(
          "disymbolAlphabet: can only construct disymbols from monosymbols."
        );
      }
      alphabet.push({
        component: [ix.component, jx.component],
        color: [ix.color, jx.color],
        regex: ix.regex + jx.regex,
      });
    });
  });
  return alphabet;
};
