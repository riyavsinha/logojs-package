import React from "react";

import { xrange } from "../../common/utils";

export type XAxisProps = {
  /** The total number of positions in the logo. */
  n: number;
  /** Optional. SVG transform to apply to the axis. */
  transform?: string;
  /** Optional. The width of each glyph in the containing logo. */
  glyphWidth: number;
  /** Optional. The number of the first position in the logo. Defaults to 1. */
  startPos?: number;
  /** Optional. Labels to use for each position instead of the number. Length must match number of positions `n` parameter. */
  labels?: string[];
  /** Optional. The rotation of the axis. Default is -90 (horizontal, left-to-right). */
  rotation?: number;
};

/**
 * Renders an x-axis with logo position numbers.
 */
export const XAxis = ({
  n,
  transform,
  glyphWidth,
  labels,
  startPos = 1,
  rotation = -90,
}: XAxisProps) => {
  if (labels && labels.length !== n) {
    throw new Error(
      `Length of labels (${labels.length}) must match the number of positions (${n}).`
    );
  }
  const numbers = xrange(n);
  const rotationTransform = `rotate(${rotation})`;
  return (
    <g transform={transform}>
      {numbers.map((n) => (
        <text
          x={glyphWidth * (n + 0.66)}
          y="0"
          fontSize="18"
          textAnchor="end"
          key={n}
          transform={rotationTransform}
          style={{ transformBox: "fill-box", transformOrigin: "right" }}
        >
          {labels ? labels[n] : n + startPos}
        </text>
      ))}
    </g>
  );
};
export default XAxis;
