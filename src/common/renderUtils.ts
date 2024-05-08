/**
 * @fileoverview These are utils for helping do calculations
 * related to rendering.
 */

import { maxLabelLength, negSum, posSum } from "./utils";

export const getBounds = (
  values: number[][],
  max: number,
  glyphWidthScaler = 1
) => {
  /* compute scaling factors */
  const maxHeight = 100.0 * max;
  const glyphWidth = (maxHeight / 6.0) * glyphWidthScaler;

  /* compute viewBox and padding for the x-axis labels */
  const viewBoxW = values.length * glyphWidth;
  return {
    maxHeight,
    glyphWidth,
    viewBoxW,
  };
};

export const frequencyRange = (alphabetSize: number) => {
  return {
    max: Math.log2(alphabetSize),
    min: 0,
  };
};

export const informationContentRange = (backgroundFrequencies: number[]) => {
  return {
    max: Math.max(
      ...backgroundFrequencies.map((x) => Math.log2(1.0 / (x || 0.01)))
    ),
    min: 0,
  };
};

export const rawRange = (values: number[][]) => {
  return {
    max: Math.max(...values.map(posSum)),
    min: Math.min(...values.map(negSum)),
  };
};

export const xAxisLabelHeight = (
  values: number[][],
  startPos: number,
  labelFontSize = 18
) => labelFontSize * (maxLabelLength(startPos, values.length) + 1);

// Add parameters if 80 is not a good default
export const yAxisWidth = () => 80;

export const calculateZeroPoint = (min: number, max: number) =>
  min < 0 ? 1 - -min / (max - min) : 1.0;
