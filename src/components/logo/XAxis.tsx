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
  /** Optional. When "middle", the label is centered within the glyph space. This is best for horizontal labels. When "end", the end of the label is centered for the glyph. This is best for diagonal labels. Both are roughly equivalent with some spacing differences for vertical labels. */
  labelAlignment?: "middle" | "end";
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
  labelAlignment = "end",
}: XAxisProps) => {
  if (labels && labels.length !== n) {
    throw new Error(
      `Length of labels (${labels.length}) must match the number of positions (${n}).`
    );
  }
  const fontSize = 18;
  const numbers = xrange(n);
  const rotationTransform = `rotate(${rotation})`;
  const rotationRadians = rotation * (Math.PI / 180);
  // Since the text is rendered using textAnchor "end", we need to offset the text just slightly to come back to the center of the glyph
  const inGlyphOffset =
    labelAlignment === "middle"
      ? 0.075 * Math.sin(rotationRadians)
      : 0.05 * Math.cos(rotationRadians);
  console.log("inGlyphOffset", inGlyphOffset);

  return (
    <g transform={transform}>
      {numbers.map((n) => {
        const textAnchor = labelAlignment === "middle" ? "" : "end";
        const transformOrigin = labelAlignment === "middle" ? "" : "right";
        const label = labels ? labels[n] : (n + startPos).toString();
        const textWidth = label.length * fontSize * 0.5;
        const centeringRotationAdjustmentX =
          labelAlignment === "middle"
            ? Math.cos(rotationRadians) * (textWidth / 2)
            : 0;
        const centeringRotationAdjustmentY =
          labelAlignment === "middle"
            ? Math.sin(rotationRadians) * textWidth
            : 0;
        return (
          <text
            x={
              glyphWidth * (n + 0.5 + inGlyphOffset) -
              centeringRotationAdjustmentX
            }
            y={-centeringRotationAdjustmentY}
            fontSize={fontSize}
            textAnchor={textAnchor}
            key={n}
            transform={rotationTransform}
            style={{
              transformBox: "fill-box",
              transformOrigin: transformOrigin,
            }}
          >
            {label}
          </text>
        );
      })}
    </g>
  );
};
