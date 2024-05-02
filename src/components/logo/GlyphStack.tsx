import React from "react";

import Glyph from "../glyphs/glyph";
import { Alphabet } from "../../types";

type GlyphEventInfo = {
  color: string | string[];
  regex: string;
  value: number;
};

type GlyphStackProps = {
  /** The total height of the glyph stack */
  height: number;
  /** The total width of the glyph stack */
  width: number;
  /** The indices corresponding to `Alphabet` entries to render. These are recommended to be in ascending order corresponding to `values`. */
  indices: number[];
  /** The alphabet containing entries to render in the stack */
  alphabet: Alphabet;
  /** A list of values corresponding to the `Alphabet` order of `indices`. The relative values determines the glyph heights within the stack. */
  values: number[];
  /** An SVG Transform string to apply to the stack. */
  transform?: string;
  /** Opacity of the glyphs. Defaults to 1 (opaque). */
  alpha?: number;
  /** Whether to invert the stack. Defaults to false. */
  inverted?: boolean;
  /** Value between 0 and 1 indicating how much to scale down multi-character glyphs. Defaults to 0.8. */
  multiGlyphBufferRatio?: number;
  /** Callback for when a symbol is moused over. */
  onSymbolMouseOver?: (symbol: GlyphEventInfo) => void;
  /** Callback for when a symbol is moused out. */
  onSymbolMouseOut?: (symbol: GlyphEventInfo) => void;
  /** Callback for when a symbol is clicked. */
  onSymbolClick?: (symbol: GlyphEventInfo) => void;
};

/**
 * Renders glyphs from an `Alphabet` in a vertical stack.
 *
 * For rendering, single-character glyphs are rendered at full width, while multi-character glyphs are scaled down by `multiGlyphBufferRatio` in order to help distinguish them when placed next to other `GlyphStack`s.
 *
 * Events are emitted
 */
export const GlyphStack = ({
  height,
  width,
  indices,
  alphabet,
  values,
  transform,
  alpha = 1,
  multiGlyphBufferRatio = 0.8,
  inverted = false,
  onSymbolMouseOver,
  onSymbolMouseOut,
  onSymbolClick,
}: GlyphStackProps) => {
  if (values.length !== indices.length || values.length !== alphabet.length) {
    throw new Error(
      "GlyphStack: `values`, `indices`, and `alphabet` must have the same length."
    );
  }

  const valuesSum = values.reduce((a, b) => a + b, 0);

  // This tracks the next y position to render a glyph in the stack
  let curYStart = height;
  const indicesOrder = inverted ? indices.slice().reverse() : indices;
  const glyphs = indicesOrder.map((index) => {
    // Skip if the alphabet entry is missing or has no rendering component
    if (!alphabet[index] || !alphabet[index].component) {
      return null;
    }
    // Skip rendering if the value/height is 0
    if (values[index] === 0.0) {
      return null;
    }

    const curGlyphHeight = (values[index] / valuesSum) * height;
    curYStart -= curGlyphHeight;
    const ccy = inverted ? curYStart + curGlyphHeight : curYStart;

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
      const yScale = (values[index] / valuesSum) * (height / 100);
      return (
        <g
          transform={tranlateTransform}
          key={index + "_" + i}
          onMouseOver={mouseoverFn}
          onMouseOut={mouseoutFn}
          onClick={clickFn}
        >
          <Glyph xscale={xScale} yscale={yScale} inverted={inverted}>
            <G fill={colors[i]} fillOpacity={alpha} color={colors[i]} />
          </Glyph>
        </g>
      );
    });
  });

  /* wrap glyphs in g */
  return <g transform={transform}>{glyphs}</g>;
};
