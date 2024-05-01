import { Component } from "react";

export const INFORMATION_CONTENT = "INFORMATION_CONTENT";
export const FREQUENCY = "FREQUENCY";

export const maxLabelLength = (startpos: number, length: number) => {
  let max = ("" + startpos).length;
  for (let i = startpos + 1; i < startpos + length; ++i)
    if (("" + i).length > max) max = ("" + i).length;
  return max;
};

export const logLikelihood =
  (backgroundFrequencies: number[]) => (r: number[], e: number) => {
    let sum = 0.0,
      es = e || 0.0;
    r.map(
      (x, i) =>
        (sum +=
          x === 0 ? 0 : x * Math.log2(x / (backgroundFrequencies[i] || 0.01)))
    );
    return r.map((x) => {
      const v = x * (sum - es);
      return v <= 0.0 ? 0.0 : v;
    });
  };

export const sortedIndices = (x: number[]) => {
  let indices = x.map((_, i) => i);
  return indices.sort((a, b) => (x[a] < x[b] ? -1 : x[a] === x[b] ? 0 : 1));
};

export const sortedIndicesNegative = (x: number[]) => {
  let indices = x.map((_, i) => i);
  return indices.sort((a, b) => (x[a] < x[b] ? 1 : x[a] === x[b] ? 0 : -1));
};

export const xrange = (n: number) => [...Array(Math.floor(n)).keys()];

export const onehot = (l: number) => (x: number) =>
  xrange(l).map((_, i) => (i === x ? 1 : 0));

export const possum = (x: number[]) => {
  let s = 0.0;
  x.filter((x) => x > 0.0).forEach((x) => {
    s += x;
  });
  return s;
};

export const negsum = (x: number[]) => {
  let s = 0.0;
  x.filter((x) => x < 0.0).forEach((x) => {
    s += x;
  });
  return s;
};

// type AlphabetEntry = { component: Component; regex: string; color: string };
// type Alphabet = AlphabetEntry[];
// export const disymbolAlphabet = (x: Alphabet) =>
//   x.reduce(
//     (ci, ix) => [
//       ...ci,
//       ...x.reduce(
//         (cj, jx) => [
//           ...cj,
//           {
//             component: [ix.component, jx.component],
//             color: [ix.color, jx.color],
//             regex: ix.regex + jx.regex,
//           },
//         ],
//         []
//       ),
//     ],
//     []
//   );

const validHex = (color: string) => {
  /* validate color is a hex color */
  color = String(color).replace(/[^0-9a-f]/gi, "");
  if (color.length === 3)
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  if (color.length === 8) color = color.substring(0, 6);
  if (color.length !== 6) throw new Error(color + " is not a valid hex color");

  /* return the first 6 hex digits */
  return color;
};

/**
 * Validates a hex color and parses it to an integer.
 *
 * @param color the color as a hex string (e.g. #fff or ABCDEF)
 */
export const parseHex = (color: string) => parseInt(validHex(color), 16);
