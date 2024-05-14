import React from "react";
import { loadGlyphComponents } from "../../common/loadGlyph";
import { negSum, posSum } from "../../common/utils";
import {
  Alphabet,
  GlyphEventInfo,
  PositionalGlyphEventInfo,
  UserDefinedAlphabet,
} from "../../types";
import { GlyphStack } from "./GlyphStack";

export type PlainLogoProps = {
  /** A matrix containing symbol values ready for rendering as-is. For a logo of length `N` with `D` letters in the alphabet, this should be shape `(N, D)`. */
  values: number[][];
  /** The alphabet containing entries to render at each position */
  alphabet: UserDefinedAlphabet;
  /** The total height of the `PlainLogo`. */
  height: number;
  /** Optional. The maximum height value a stack could theoretically have (e.g. maximum information content or frequency). If not provided, the maximum of the sum of positive values at each position is used. */
  maxValue?: number;
  /** Optional. The minimum height value a stack could theoretically have (e.g. minimum information content or frequency). If not provided, the minimum of the sum of negative values at each position is used. */
  minValue?: number;
  /** Optional. The width of a single glyph, relative to the containing SVG. Defaults to 100. */
  glyphWidth?: number;
  /** Optional. Value between 0 and 1 indicating how much to scale down multi-character glyphs in the x-dimension. Defaults to 0.8. */
  multiGlyphBufferRatio?: number;
  /** Optional. Boolean value that keeps glyphs with negative values right-side-up instead of inverted. */
  invertedGlyphsRightSideUp?: boolean;
  /** Optional. Opacity of the glyphs. Defaults to 1 (opaque). */
  alpha?: number;
  /** Optional. An opacity to apply to negative values. Takes precedence over `alpha`. Defaults to 0.5. */
  negativeAlpha?: number;
  /** Optional. Callback for when a symbol is moused over */
  onSymbolMouseOver?: (eventInfo: PositionalGlyphEventInfo) => void;
  /** Optional. Callback for when a symbol is moused out from */
  onSymbolMouseOut?: (eventInfo: PositionalGlyphEventInfo) => void;
  /** Optional. Callback for when a symbol is clicked */
  onSymbolClick?: (eventInfo: PositionalGlyphEventInfo) => void;
};

/**
 * Renders a logo without axes.
 *
 * This component can be used composably with other components to create a logo with axes, or other decorations.
 *
 * This assumes that your matrix values are already prepared for plotting, representing relative heights of each symbol at each position.  Please consult the utility functions for help in preparing your data if no premade components fit your needs.
 */
export const PlainLogo = ({
  values,
  alphabet,
  glyphWidth = 100,
  height,
  maxValue,
  minValue,
  multiGlyphBufferRatio = 0.8,
  invertedGlyphsRightSideUp = false,
  alpha,
  negativeAlpha,
  onSymbolMouseOver,
  onSymbolMouseOut,
  onSymbolClick,
}: PlainLogoProps) => {
  // Load default glyph components if not provided
  for (const symbol of alphabet) {
    if (!symbol.component) {
      alphabet = loadGlyphComponents(alphabet);
      break;
    }
  }

  const posStackValueSums = values.map(posSum);
  const negStackValueSums = values.map((x) => -negSum(x));
  const maxStackValue = maxValue || Math.max(...posStackValueSums);
  const minStackValue = minValue || Math.min(...negStackValueSums);

  const stacks = values.map((positionValues, i) => {
    const translateTransform = `translate(${glyphWidth * i},0)`;
    return (
      <GlyphStack
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
        values={positionValues}
        maxValue={maxStackValue}
        minValue={minStackValue}
        transform={translateTransform}
        width={glyphWidth}
        height={height}
        alpha={alpha}
        negativeAlpha={negativeAlpha}
        multiGlyphBufferRatio={multiGlyphBufferRatio}
        invertedGlyphsRightSideUp={invertedGlyphsRightSideUp}
        key={i}
      />
    );
  });
  // TODO: Not sure why storybook docs won't work without this instead of just returning the map
  return <>{stacks}</>;
};

const constructEventInfo = (
  i: number,
  symbol: GlyphEventInfo
): PositionalGlyphEventInfo => ({
  ...symbol,
  position: i,
});
