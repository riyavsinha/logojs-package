import { FREQUENCY, calculateLogLikelihood, xrange } from "./utils";

/**
 * Converts position probability matrices (PPM) into likelihood scores.
 *
 * This function calculates either the log likelihood scores or the frequency of positions based on the input mode. If the background frequencies are not provided, it generates default background frequencies based on the alphabet size derived from the PPM.
 *
 * @param ppm The position probability matrix where each inner array represents probabilities of various symbols at a particular position.
 * @param mode Determines the type of likelihood calculation: 'FREQUENCY' for frequency-based scoring or any other value for log likelihood scoring.
 * @param backgroundFrequencies Optional. Array of background frequencies of each symbol. If not provided, defaults are used.
 * @param positionCounts If provided, is used to adjust the entropy of the log likelihood scores.
 * @returns Matrix of likelihood scores; structure mirrors that of the input PPM.
 */
export const ppmToLikelihood = (
  ppm: number[][],
  mode: string,
  positionCounts: number[] | null = null,
  backgroundFrequencies?: number[]
): number[][] => {
  if (backgroundFrequencies && ppm[0].length !== backgroundFrequencies.length) {
    throw new Error(
      "Background frequencies and PPM position vectors must be the same length"
    );
  }
  if (positionCounts && ppm.length !== positionCounts.length) {
    throw new Error("Position counts and PPM must be the same length");
  }
  let alphabetSize = ppm[0].length;
  const _backgroundFrequencies =
    backgroundFrequencies ?? generateDefaultBackgroundFrequencies(alphabetSize);
  const logLikelihoodFn = calculateLogLikelihood(
    _backgroundFrequencies,
    alphabetSize
  );
  return mode !== FREQUENCY
    ? ppm.map((x, i) => logLikelihoodFn(x, positionCounts?.[i]))
    : ppm.map((x) => x.map((v) => v * Math.log2(alphabetSize)));
};

/**
 * Converts a Position Frequency Matrix (PFM) into a Position Probability Matrix (PPM) and optionally returns the total counts from the PFM to use for relative pseudocount calculations.
 *
 * By default, the function applies a small sample correction to the PFM to prevent zero probabilities. If a constant pseudocount is provided, it is added to each count in the PFM instead. If small sample correction is disabled, the function does no correction.
 *
 * @param pfm The Position Frequency Matrix, a 2D array where each inner array represents nucleotide counts at a particular position in the sequence.
 * @param constantPseudocount A fixed number added to each count in the PFM to prevent zero probabilities. Defaults to 0.
 * @param useSmallSampleCorrection Indicates whether to use position counts to create relative pseudocounts.
 * @param numSequences The total number of sequences used to generate the PFM. If provided, it is used as the denominator while calculating PPM instead of provided constant psuedocounts or calculated relative pseudocounts.
 * @returns A tuple where the first element is the PPM (Position Probability Matrix), a 2D array representing probabilities at each position, and the second element is an array of total counts per position if small sample correction was applied; otherwise, null.
 */
export const pfmToPpm = (
  pfm: number[][],
  constantPseudocount: number = 0,
  useSmallSampleCorrection: boolean = true,
  numSequences?: number
): [number[][], number[] | null] => {
  const alphabetLength = pfm[0].length;

  // Use relative pseudocounts if small sample correction is enabled and no constant pseudocount is provided
  const relativePseudocount =
    !constantPseudocount && !numSequences && useSmallSampleCorrection;
  const pseudocount = relativePseudocount ? 0 : constantPseudocount;

  // Compute the total counts for each position
  const totalCounts = pfm.map((column) =>
    column.reduce((total, value) => total + value, 0)
  );

  // Compute the Position Probability Matrix (PPM) from the Position Frequency Matrix (PFM)
  const ppm = pfm.map((column) => {
    return column.map((value, i) => {
      const denominator = numSequences ?? totalCounts[i] + pseudocount;
      return (value + pseudocount / alphabetLength) / denominator;
    });
  });

  // Convert the PPM to likelihood scores based on the given mode
  return [ppm, relativePseudocount ? totalCounts : null];
};

export const generateDefaultBackgroundFrequencies = (
  numEl: number
): number[] => {
  return xrange(numEl).map((_) => 1.0 / numEl);
};
