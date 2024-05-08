import React from "react";

type GlyphProps = {
  /** the factor by which to scale the glyph's height. */
  yscale: number;
  /** if set, reflects the glyph vertically. */
  inverted?: boolean;
  /** the factor by which to scale the glyph's width. */
  xscale: number;
  /** the SVG contents to transform. */
  children: React.ReactNode;
};

/**
 * Container component which scales a square glyph to the required dimensions.
 */
export const Glyph = ({ yscale, inverted, xscale, children }: GlyphProps) => {
  const _yscale = yscale * (inverted ? -1 : 1);
  const transform = `scale(${xscale}, ${_yscale})`;
  return <g transform={transform} height={yscale}>{children}</g>;
};
