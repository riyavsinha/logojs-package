import React from "react";

type GlyphProps = {
  /** the factor by which to scale the glyph's height. */
  yScale: number;
  /** if set, reflects the glyph vertically. */
  inverted?: boolean;
  /** the factor by which to scale the glyph's width. */
  xScale: number;
  /** the SVG contents to transform. */
  children: React.ReactNode;
  /** Optional. SVG Transform string to apply to the Glyph. */
  transform?: string;
};

/**
 * Container component which scales a square glyph to the required dimensions.
 */
export const Glyph = ({
  yScale,
  inverted,
  xScale,
  children,
  transform,
}: GlyphProps) => {
  const _yScale = yScale * (inverted ? -1 : 1);
  const scaleTransform = `scale(${xScale}, ${_yScale})`;
  const transformString = `${scaleTransform} ${transform ?? ""}`;
  return (
    <g transform={transformString} height={yScale}>
      {children}
    </g>
  );
};
