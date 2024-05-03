import React from "react";

type YGridlinesProps = {
  /** The x-coordinate of the start of the gridlines. Defaults to 0  */
  xStart?: number;
  /** The x-coordinate of the end of the gridlines. This generally corresponds to the width of your container. */
  xEnd: number;
  /** The y-coordinate of the end of the gridlines. Defaults to 0. */
  yStart?: number;
  /** The y-coordinate of the end of the gridlines.This generally corresponds to the height of your container. */
  yEnd: number;
  /** The number of gridlines to render. */
  numGridlines: number;
  /** The stroke color of the gridlines. Defaults to "black". */
  stroke?: string;
  /** An SVG transform string to apply to the gridlines. This can be used in place of `xStart` and `yStart` by using `translate(xStart, yStart)`, or be combined with it. */
  transform?: string;
};

/**
 * Renders vertical gridlines in an SVG.
 */
export const YGridlines: React.FC<YGridlinesProps> = ({
  xStart = 0,
  xEnd,
  yEnd,
  yStart = 0,
  numGridlines,
  transform,
  stroke = "black",
}) => {
  // Calculate the number of grid lines
  const gridSpacing = (xEnd - xStart) / numGridlines;
  const gridlineXs = Array.from(
    { length: numGridlines + 1 },
    (_, i) => xStart + i * gridSpacing
  );

  // Bottom coordinate for all lines
  const yBottom = yStart + yEnd;

  return (
    <g stroke={stroke} transform={transform}>
      {gridlineXs.map((value, index) => (
        <line key={index} x1={value} x2={value} y1={yStart} y2={yBottom} />
      ))}
    </g>
  );
};
