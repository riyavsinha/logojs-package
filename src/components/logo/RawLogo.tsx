import React from "react";
import { loadGlyphComponents } from "../../common/loadGlyph";
import { negSum, posSum, sortedIndices } from "../../common/utils";
import {
  Alphabet,
  GlyphEventInfo,
  PositionalGlyphEventInfo,
  UserDefinedAlphabet,
} from "../../types";
import { GlyphStack } from "./GlyphStack";

type RawLogoProps = {
  /** A matrix containing symbol values. For a logo of length `N` with `D` letters in the alphabet, this should be shape `(N, D)`. */
  values: number[][];
  /** The alphabet containing entries to render */
  alphabet: UserDefinedAlphabet;
  /** The total height of the Logo. */
  height: number;
  /** The height of each position. These are normalized such that the tallest value will be the same height as the total logo, and others are smaller based on that reference. If not provided, these are calculated by summing over the values in each position. */
  // stackHeights?: number[];
  /** The maximum height value a stack could have. If provided, `stackHeights` will be normalized relative to this value. */
  maxValue?: number;
  minValue?: number;
  /** The width of a single glyph, relative to the containing SVG. Defaults to 100. */
  glyphWidth?: number;
  /** Value between 0 and 1 indicating how much to scale down multi-character glyphs in the x-dimension. Defaults to 0.8. */
  multiGlyphBufferRatio?: number;
  invertedGlyphsRightSideUp?: boolean;
  /** Callback for when a symbol is moused over */
  onSymbolMouseOver?: (eventInfo: PositionalGlyphEventInfo) => void;
  /** Callback for when a symbol is moused out from */
  onSymbolMouseOut?: (eventInfo: PositionalGlyphEventInfo) => void;
  /** Callback for when a symbol is clicked */
  onSymbolClick?: (eventInfo: PositionalGlyphEventInfo) => void;
};

/**
 * Renders a logo without axes.
 *
 * This component can be used composably with other components to create a logo with axes, or other decorations.
 *
 * This assumes that your matrix values are already prepared for plotting, representing relative heights of each symbol at each position.  Please consult the utility functions for help in preparing your data if no premade components fit your needs.
 */
export const RawLogo = ({
  values,
  alphabet,
  glyphWidth = 100,
  height,
  // stackHeights,
  maxValue,
  minValue,
  multiGlyphBufferRatio = 0.8,
  invertedGlyphsRightSideUp = false,
  onSymbolMouseOver,
  onSymbolMouseOut,
  onSymbolClick,
}: RawLogoProps) => {
  // Load default glyph components if not provided
  for (const symbol of alphabet) {
    if (!symbol.component) {
      alphabet = loadGlyphComponents(alphabet);
      break;
    }
  }

  // Check dimensions match
  // if (stackHeights && stackHeights.length !== values.length) {
  //   throw new Error(
  //     "RawLogo: `stackHeights` must have the same length as `values`."
  //   );
  // }

  // const maxes = values.map(possum);
  // const mins = values.map((x) => -negsum(x));
  // // const mvalue = Math.max(...maxes, ...mins);

  const posStackValueSums = values.map(posSum);
  const negStackValueSums = values.map((x) => -negSum(x));
  const maxStackValue = maxValue || Math.max(...posStackValueSums);
  const minStackValue = minValue || Math.min(...negStackValueSums);

  // const heights = _stackHeights.map((h) => (h / maxStackHeight) * height);

  const addGlyphStackFn = addGlyphStack({
    alphabet: alphabet as Alphabet,
    onSymbolMouseOver,
    onSymbolClick,
    onSymbolMouseOut,
    width: glyphWidth,
    multiGlyphBufferRatio,
  });

  const stacks = values.map((lv, i) => {
    const posValues = lv.map((v) => Math.max(v, 0));
    // console.log(posValues);
    const posIndices = sortedIndices(posValues);
    const posTranslateTransform = `translate(${glyphWidth * i},0)`;

    const negValues = lv.map((v) => Math.min(v, 0));
    const negIndices = sortedIndices(negValues);

    // const indices = sortedIndices(lv);

    // return [
    return (
      <GlyphStack
        // indices={sortedIndices(lv)}
        alphabet={alphabet as Alphabet}
        onSymbolMouseOver={
          onSymbolMouseOver
            ? (s) => onSymbolMouseOver(constructEventInfo(i, s))
            : undefined
        }
        onSymbolClick={
          onSymbolClick
            ? (s) => onSymbolClick(constructEventInfo(i, s))
            : undefined
        }
        onSymbolMouseOut={
          onSymbolMouseOut
            ? (s) => onSymbolMouseOut(constructEventInfo(i, s))
            : undefined
        }
        values={lv}
        maxValue={maxStackValue}
        minValue={minStackValue}
        transform={posTranslateTransform}
        width={glyphWidth}
        height={height}
        multiGlyphBufferRatio={multiGlyphBufferRatio}
        key={i}
      />
    );
    // addGlyphStackFn({
    //   indices: posIndices,
    //   position: i,
    //   values: posValues,
    //   transform: posTranslateTransform,
    //   height,
    //   maxValue: maxStackValue,
    // }),
    // addGlyphStackFn({
    //   indices: negIndices,
    //   position: i,
    //   values: negValues,
    //   transform: posTranslateTransform,
    //   height,
    //   maxValue: maxStackValue,
    //   inverted: true,
    //   // invertedGlyphsRightSideUp: true
    // }),
    // ];
  });
  // TODO: Not sure why storybook docs won't work without this instead of just returning the map
  return <>{stacks}</>;
};

type AddGlyphStackArgs = {
  alphabet: Alphabet;
  onSymbolMouseOver:
    | ((eventInfo: PositionalGlyphEventInfo) => void)
    | undefined;
  onSymbolClick: ((eventInfo: PositionalGlyphEventInfo) => void) | undefined;
  onSymbolMouseOut: ((eventInfo: PositionalGlyphEventInfo) => void) | undefined;
  width: number;
  // height: number;
  multiGlyphBufferRatio: number;
  // maxValue: number;
};
type AddGlyphStackInnerArgs = {
  indices: number[];
  position: number;
  height: number;
  maxValue: number;
  values: number[];
  transform: string;
  inverted?: boolean;
  invertedGlyphsRightSideUp?: boolean;
};
const addGlyphStack =
  ({
    alphabet,
    onSymbolMouseOver,
    onSymbolClick,
    onSymbolMouseOut,
    width,
    // height,
    multiGlyphBufferRatio,
    // maxValue,
  }: AddGlyphStackArgs) =>
  ({
    indices,
    position,
    values,
    transform,
    height,
    inverted = false,
    maxValue,
    invertedGlyphsRightSideUp = false,
  }: AddGlyphStackInnerArgs) => (
    <GlyphStack
      indices={indices}
      alphabet={alphabet as Alphabet}
      onSymbolMouseOver={
        onSymbolMouseOver
          ? (s) => onSymbolMouseOver(constructEventInfo(position, s))
          : undefined
      }
      onSymbolClick={
        onSymbolClick
          ? (s) => onSymbolClick(constructEventInfo(position, s))
          : undefined
      }
      onSymbolMouseOut={
        onSymbolMouseOut
          ? (s) => onSymbolMouseOut(constructEventInfo(position, s))
          : undefined
      }
      values={values}
      maxValue={maxValue}
      transform={transform}
      width={width}
      height={height}
      multiGlyphBufferRatio={multiGlyphBufferRatio}
      key={position}
      inverted={inverted}
      invertedGlyphsRightSideUp={invertedGlyphsRightSideUp}
    />
  );

const constructEventInfo = (
  i: number,
  symbol: GlyphEventInfo
): PositionalGlyphEventInfo => ({
  ...symbol,
  position: i,
});
