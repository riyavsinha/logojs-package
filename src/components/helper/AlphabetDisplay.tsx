import { PlainLogo, PlainLogoProps } from "../..";
import { loadGlyphComponents } from "../../common/loadGlyph";

export type AlphabetDisplayProps = Omit<PlainLogoProps, "values">;

export const AlphabetDisplay = ({
  alphabet,
  ...props
}: AlphabetDisplayProps) => {
  const filledAlphabet = loadGlyphComponents(alphabet);
  const values: number[][] = alphabet.map((_, i) => {
    const arr = new Array<number>(alphabet.length).fill(0);
    arr[i] = 1;
    return arr;
  });
  return <PlainLogo alphabet={filledAlphabet} values={values} {...props} />;
};
