import React from "react";
import { loadGlyphComponents } from "../../common/loadGlyph";
import { sortedIndices } from "../../common/utils";
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
  stackHeights?: number[];
  /** The maximum height value a stack could have. If provided, `stackHeights` will be normalized relative to this value. */
  stackMaxHeight?: number;
  /** The width of a single glyph, relative to the containing SVG. Defaults to 100. */
  glyphWidth?: number;
  /** Value between 0 and 1 indicating how much to scale down multi-character glyphs in the x-dimension. Defaults to 0.8. */
  multiGlyphBufferRatio?: number;
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
  stackHeights,
  stackMaxHeight,
  multiGlyphBufferRatio = 0.8,
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
  if (stackHeights && stackHeights.length !== values.length) {
    throw new Error(
      "RawLogo: `stackHeights` must have the same length as `values`."
    );
  }

  const _stackHeights =
    stackHeights || values.map((v) => v.reduce((a, b) => a + b, 0));
  const maxStackHeight = stackMaxHeight || Math.max(..._stackHeights);
  const heights = _stackHeights.map((h) => (h / maxStackHeight) * height);
  const stacks = values.map((lv, i) => {
    const translateTransform = `translate(${glyphWidth * i},${height - heights[i]})`;
    const indices = sortedIndices(lv);

    return (
      <GlyphStack
        indices={indices}
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
        transform={translateTransform}
        width={glyphWidth}
        height={heights[i]}
        multiGlyphBufferRatio={multiGlyphBufferRatio}
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
