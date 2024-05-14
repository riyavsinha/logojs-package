import { UserDefinedAlphabet } from "../types";
import { constructSymbolToAlphabetIndexMap } from "./utils";

/**
 * Converts a list of sequences to a position frequency matrix.
 *
 * @param alphabet the alphabet to use for the PFM
 * @param sequenceText the sequences to convert to a PFM. This can be either FASTA format, or one sequence per line.
 */
export const sequencesToPFM = (
  alphabet: UserDefinedAlphabet,
  sequenceText: string
): { count: number; pfm: number[][] } => {
  const symbolMap = constructSymbolToAlphabetIndexMap(alphabet);
  const sequences = sequenceText.includes(">")
    ? parseFASTA(sequenceText)
    : sequenceText.split("\n").map((x) => x.trim());
  const pfm: number[][] = [];
  const maxLength = Math.max(...sequences.map((s) => s.length));
  // Initialize the PFM with zeros
  for (let i = 0; i < maxLength; ++i) pfm.push(alphabet.map((_) => 0));
  sequences.forEach((sequence) => {
    for (let i = 0; i < sequence.length; ++i) ++pfm[i][symbolMap[sequence[i]]];
  });
  return {
    pfm,
    count: sequences.length,
  };
};

export const parseFASTA = (fastaText: string) => {
  const sequences: string[] = [];
  fastaText.split("\n").forEach((line) => {
    if (line.trim().startsWith(">")) sequences.push("");
    else sequences[sequences.length - 1] += line.trim();
  });
  return sequences;
};
