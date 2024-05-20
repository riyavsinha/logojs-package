import { Logo, LogoProps } from "./Logo";
import { DataType, UserDefinedAlphabet } from "../types";
import { DNAAlphabet } from "../common/alphabet";
import { is1DNumericArray, is2DNumericArray } from "../common/utils";

export type BigWigLogoProps = Omit<
  LogoProps,
  "alphabet" | "data" | "dataType" | "mode"
> & {
  /** The DNA alphabet to use for the logo. */
  alphabet?: UserDefinedAlphabet;
  /** Optional. The sequence to render heights for. If provided, `data` should be a 1D array, as described in its description. */
  sequence?: string;
  /** The data values to render. If sequence is provided, data should be a 1D array of values corresponding to the value for each corresponding element in sequence. If sequence is not provided, data should be a 2D array of values that will be rendered as raw values. */
  data: number[][] | number[];
};

/**
 * Renders a logo with the provided data values ("raw" mode).
 *
 * A 2D data matrix can be provided as usual to a Logo. However, a `sequence` string can be provided, in which case the data should be a 1D array/list of values corresponding to the value for each corresponding element in sequence.
 */
export const BigWigLogo = ({
  alphabet = DNAAlphabet,
  data,
  sequence,
  ...props
}: BigWigLogoProps) => {
  const alphabetChars = alphabet.map((l) => l.regex);
  let _data: number[][] = [];
  if (sequence) {
    if (!is1DNumericArray(data)) {
      throw new Error(
        "Data must be provided as a 1D array if sequence is provided"
      );
    }
    if (data.length !== sequence.length) {
      throw new Error("Data must be the same length as the sequence");
    }
    if ([...sequence].some((x) => !alphabetChars.includes(x))) {
      throw new Error("Sequence contains characters not in the alphabet");
    }
    // to one hot
    _data = data.map((x, i) =>
      alphabet.map((l) => (l.regex === sequence[i] ? x : 0))
    );
  } else {
    if (!is2DNumericArray(data)) {
      throw new Error(
        "Data must be provided as a 2D array if sequence is not provided"
      );
    }
    if (data.some((x) => x.length !== alphabet.length)) {
      throw new Error(
        "Data must have the same number of columns as the alphabet"
      );
    }
    _data = data;
  }
  return (
    <Logo
      alphabet={alphabet}
      data={_data}
      dataType={DataType.VALUES}
      mode="RAW"
      {...props}
    />
  );
};
