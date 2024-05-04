import { FREQUENCY, logLikelihood, xrange } from "./utils";

export const ppmToLikelihood = (
  ppm: number[][],
  mode: string,
  backgroundFrequencies?: number[]
): number[][] => {
  /* compute likelihood; need at least one entry to continue */
  if (ppm.length === 0 || ppm[0].length === 0) return [[]];
  let alphabetSize = ppm[0].length;
  const _backgroundFrequencies =
    backgroundFrequencies ?? generateDefaultBackgroundFrequencies(alphabetSize);
  return mode !== FREQUENCY
    ? ppm.map((x) => logLikelihood(_backgroundFrequencies)(x, 0))
    : ppm.map((x) => x.map((v) => v * Math.log2(alphabetSize)));
};

// export const pfmToLikelihood = (pfm: number[][], mode: string): number[][] => {
//   const relativePseudocount =
//     (pfm || fasta) && !constantPseudocount && !countUnaligned
//       ? !smallSampleCorrectionOff
//       : false;
//   const pseudocount = relativePseudocount
//     ? 0
//     : (constantPseudocount || 0) / alphabet.length;
//   const sums =
//     relativePseudocount &&
//     pfm &&
//     pfm.map &&
//     pfm
//       .map((x) => x.reduce((t, v, i) => (i === undefined ? t : v + t), 0.0))
//       .map((x) =>
//         x === 0 ? 0 : (alphabet.length - 1) / (2 * Math.log(2) * x)
//       );
//   console.log(sums);
//     ppm = pfm.map((column, i) => {
//       const sum =
//         (count && countUnaligned
//           ? count
//           : column.reduce((a, c) => a + c, 0.0) +
//             pseudocount * alphabet.length) || 1;
//       return column.map((x) => (x + pseudocount) / sum);
//     });
// };

export const generateDefaultBackgroundFrequencies = (
  numEl: number
): number[] => {
  return xrange(numEl).map((_) => 1.0 / numEl);
};
