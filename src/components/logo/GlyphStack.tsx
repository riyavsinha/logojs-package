import React from "react";

import Glyph from "../glyphs/glyph";
import { Alphabet } from "../../types";

type GlyphStackProps = {
  /** The total height of the glyph stack */
  height: number;
  /** The total width of the glyph stack */
  width: number;
  /** The indices corresponding to `Alphabet` entries to render in order, starting from the bottom */
  indices: number[];
  /** The alphabet containing entries to render in the stack */
  alphabet: Alphabet;
  /** A list of values corresponding to the `Alphabet` order of `indices`. The relative values determines the glyph heights within the stack. */
  values: number[];
  /** An SVG Transform string to apply to the stack. */
  transform: string;
  /** Opacity of the glyphs. Defaults to 1 (opaque). */
  alpha?: number;
  /** Whether to invert the stack */
  inverted: boolean;
  /** Callback for when a symbol is moused over. */
  onSymbolMouseOver?: (symbol: any) => void;
  /** Callback for when a symbol is moused out. */
  onSymbolMouseOut?: (symbol: any) => void;
  /** Callback for when a symbol is clicked. */
  onSymbolClick?: (symbol: any) => void;
};

/**
 * Renders glyphs from an `Alphabet` in a vertical stack.
 */
export const GlyphStack = ({
  height,
  width,
  indices,
  alphabet,
  values,
  transform,
  alpha = 1,
  inverted,
  onSymbolMouseOver,
  onSymbolMouseOut,
  onSymbolClick,
}: GlyphStackProps) => {
  if (values.length !== indices.length || values.length !== alphabet.length) {
    throw new Error(
      "GlyphStack: `values`, `indices`, and `alphabet` must have the same length."
    );
  }

  // move up from bottom
  const valuesSum = values.reduce((a, b) => a + b, 0);
  let cy = height; // start from bottom with smallest letter
  let xscale = width / 100.0; // scale to glyphs' 100x100 viewport

  // stack glyphs in order
  let glyphs = indices.map((index) => {
    if (!alphabet[index] || !alphabet[index].component) {
      return null;
    }
    if (values[index] === 0.0) {
      return null;
    }

    cy -= (values[index] * height) / valuesSum;
    const ccy = inverted ? cy + (values[index] * height) / valuesSum : cy;

    const component = alphabet[index].component;
    const color = alphabet[index].color;

    if (!Array.isArray(component)) {
      let G = component;
      const tranlateTransform = `translate(0,${ccy})`;
      return (
        <g
          transform={tranlateTransform}
          key={index}
          onMouseOver={
            onSymbolMouseOver && (() => onSymbolMouseOver(alphabet[index]))
          }
          onMouseOut={
            onSymbolMouseOut && (() => onSymbolMouseOut(alphabet[index]))
          }
          onClick={onSymbolClick && (() => onSymbolClick(alphabet[index]))}
        >
          <Glyph
            xscale={xscale}
            yscale={(values[index] / valuesSum) * (height / 100)}
            inverted={inverted}
          >
            <G fill={alphabet[index].color} fillOpacity={alpha} color={color} />
          </Glyph>
        </g>
      );
    }

    let _xscale = (xscale * 0.8) / component.length;
    const colorArray = Array.isArray(color)
      ? color
      : component.map((_) => color);
    // if (!Array.isArray(color))
    //   alphabet[index].color = component.map((_) => color);
    return component.map((G, i) => (
      <g
        transform={
          "translate(" +
          ((i * width * 0.8) / component.length + width * 0.1) +
          "," +
          ccy +
          ")"
        }
        key={index + "_" + i}
        onMouseOver={
          onSymbolMouseOver && (() => onSymbolMouseOver(alphabet[index]))
        }
        onMouseOut={
          onSymbolMouseOut && (() => onSymbolMouseOut(alphabet[index]))
        }
        onClick={onSymbolClick && (() => onSymbolClick(alphabet[index]))}
      >
        <Glyph xscale={_xscale} yscale={values[index]} inverted={inverted}>
          <G fill={colorArray[i]} fillOpacity={alpha} color={colorArray[i]} />
        </Glyph>
      </g>
    ));
  });

  /* wrap glyphs in g */
  return <g transform={transform}>{glyphs}</g>;
};
