import React from "react";

import Glyph from "../glyphs/glyph";
import { Alphabet, GlyphEventInfo } from "../../types";
import { calculateZeroPoint } from "../../common/renderUtils";
import _ from "lodash";
import { negSum, posSum, sortedIndicesByMagnitude } from "../../common/utils";

type GlyphStackProps = {
  /** The total height of the glyph stack */
  height: number;
  /** The total width of the glyph stack */
  width: number;
  /** The alphabet containing entries to render in the stack */
  alphabet: Alphabet;
  /** A list of values. The relative values determines the glyph heights within the stack. */
  values: number[];
  /** Optional. The maximum value that the top of the `GlyphStack` should represent. If not provided, the maximum value is the sum of all positive entries. */
  maxValue?: number;
  /** Optional. The minimum value that the bottom of the `GlyphStack` should represent. If not provided, the minimum value is the sum of all negative entries.  */
  minValue?: number;
  /** Optional. The indices corresponding to `Alphabet` entries to render in order. By default, renders the smallest magnitude elements (both positive and negative) outwards from the zero, with the largest magnitude elements last. */
  indices?: number[];
  /** Optional. An SVG Transform string to apply to the stack. */
  transform?: string;
  /** Optional. Opacity of the glyphs. Defaults to 1 (opaque). */
  alpha?: number;
  /** Optional. An opacity to apply to negative values. Takes precedence over `alpha`. Defaults to 0.5. */
  negativeAlpha?: number;
  /** Optional. Value between 0 and 1 indicating how much to scale down multi-character glyphs, to give a buffer between different groups of characters. Defaults to 0.8. */
  multiGlyphBufferRatio?: number;
  /** Optional. Boolean value that keeps negative values right-side-up. */
  invertedGlyphsRightSideUp?: boolean;
  /** Optional. Callback for when a symbol is moused over. */
  onSymbolMouseOver?: (symbol: GlyphEventInfo) => void;
  /** Optional. Callback for when a symbol is moused out. */
  onSymbolMouseOut?: (symbol: GlyphEventInfo) => void;
  /** Optional. Callback for when a symbol is clicked. */
  onSymbolClick?: (symbol: GlyphEventInfo) => void;
};

/**
 * Renders glyphs from an `Alphabet` in a vertical stack.
 *
 * For rendering, single-character glyphs are rendered at full width, while multi-character glyphs are scaled down by `multiGlyphBufferRatio` in order to help distinguish them when placed next to other `GlyphStack`s.
 *
 * In the case of negative values, the glyphs are rendered upside-down by default. This can be changed by setting `invertedGlyphsRightSideUp` to `true`.
 *
 * The `maxValue` and `minValue` props can be used to set the maximum and minimum values that the top and bottom of the stack should represent. If not provided, the maximum value is the sum of all positive entries, and the minimum value is the sum of all negative entries.
 *
 * The stack renders outwards from the zero point, with the smallest magnitude elements (both positive and negative) rendered first, and the largest magnitude elements rendered last.
 */
export const GlyphStack = ({
  height,
  width,
  indices,
  alphabet,
  values,
  maxValue,
  minValue,
  transform,
  alpha,
  negativeAlpha,
  multiGlyphBufferRatio = 0.8,
  invertedGlyphsRightSideUp = false,
  onSymbolMouseOver,
  onSymbolMouseOut,
  onSymbolClick,
}: GlyphStackProps) => {
  if (values.length !== alphabet.length) {
    throw new Error(
      "GlyphStack: `values` and `alphabet` must have the same length."
    );
  }

  if (indices && indices.length !== values.length) {
    throw new Error(
      "GlyphStack: `indices` must have the same length as `values`."
    );
  }

  const _indices = indices || sortedIndicesByMagnitude(values);

  let _maxValue = maxValue || posSum(values);
  let _minValue = minValue || negSum(values);

  const range = _maxValue - _minValue;

  // This tracks the next y position to render a glyph in the stack
  let posYStart = height * calculateZeroPoint(_minValue, _maxValue);
  let negYStart = posYStart;
  const glyphs = _indices.map((index) => {
    // Skip if the alphabet entry is missing or has no rendering component
    if (!alphabet[index] || !alphabet[index].component) {
      return null;
    }
    // Skip rendering if the value/height is 0
    if (values[index] === 0.0) {
      return null;
    }

    const curGlyphHeight = (values[index] / range) * height;
    if (values[index] < 0) {
      negYStart -= curGlyphHeight;
    } else {
      posYStart -= curGlyphHeight;
    }
    let ccy = values[index] < 0 ? negYStart : posYStart;
    if (values[index] < 0 && invertedGlyphsRightSideUp) {
      ccy += curGlyphHeight;
    }

    const component = alphabet[index].component;
    const color = alphabet[index].color;
    const components = Array.isArray(component) ? component : [component];
    const colors = Array.isArray(color) ? color : components.map((_) => color);

    const multiGlyphMultiplier =
      component.length > 1 ? multiGlyphBufferRatio : 1;
    const baseXScale = width / 100.0; // scale to glyphs' 100x100 viewport
    const xScale = (baseXScale * multiGlyphMultiplier) / component.length;

    const glyphInfo: GlyphEventInfo = {
      color: alphabet[index].color,
      regex: alphabet[index].regex,
      value: values[index],
    };
    const mouseoverFn =
      onSymbolMouseOver && (() => onSymbolMouseOver(glyphInfo));
    const mouseoutFn = onSymbolMouseOut && (() => onSymbolMouseOut(glyphInfo));
    const clickFn = onSymbolClick && (() => onSymbolClick(glyphInfo));

    return components.map((G, i) => {
      // Helps keep multi-character glyphs centered in the stack
      const multiGlyphBufferTransformRatio =
        component.length > 1 ? (1 - multiGlyphMultiplier) / 2 : 0;
      // Multi-character glyphs need to be translated to be placed next to each other
      const xTranslation =
        component.length > 1
          ? (i * width * multiGlyphMultiplier) / component.length +
            width * multiGlyphBufferTransformRatio
          : 0;
      const tranlateTransform = `translate(${xTranslation},${ccy})`;
      const yScale = (values[index] / range) * (height / 100);
      const opacity =
        values[index] < 0 ? negativeAlpha || alpha || 0.5 : alpha || 1;
      return (
        <g
          transform={tranlateTransform}
          key={index + "_" + i}
          onMouseOver={mouseoverFn}
          onMouseOut={mouseoutFn}
          onClick={clickFn}
        >
          <Glyph
            xscale={xScale}
            yscale={yScale}
            inverted={invertedGlyphsRightSideUp}
          >
            <G fill={colors[i]} fillOpacity={opacity} color={colors[i]} />
          </Glyph>
        </g>
      );
    });
  });

  /* wrap glyphs in g */
  return <g transform={transform}>{glyphs}</g>;
};
