import React from "react";

import { xrange } from "../../common/utils";
import { calculateZeroPoint } from "../../common/renderUtils";

export type YAxisProps = {
  /** The maximum number on the axis */
  max: number;
  /** The minimum number on the axis */
  min?: number;
  /** The number of ticks on the axis. Default is one tick for each number. */
  numTicks?: number;
  /** SVG transform to apply to the y-axis. */
  transform?: string;
  /** The height of the logo relative to the containing SVG. */
  height: number;
  /** The width of the logo relative to the containing SVG. */
  width: number;
  /** If set, fraction of the distance from the top where zero should be. */
  zeroPoint?: number;
  /** The y-axis label. Default is "bits". */
  label?: string;
};

/**
 * Renders a y-axis with bit numbers.
 */
export const YAxis = ({
  max,
  min = 0,
  transform,
  height,
  numTicks,
  width,
  // zeroPoint = 1.0,
  label = "bits",
}: YAxisProps) => {
  // const ticks = xrange(max + 1);
  min = min < 0 ? min : 0;
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);
  const _numTicks = numTicks || intMax - intMin;
  const ticks = xrange(_numTicks + 1).map(
    (x) => (x / _numTicks) * (intMax - intMin) + intMin
  );
  if (max !== intMax) {
    ticks.push(max);
  }
  if (min !== intMin) {
    ticks.unshift(min);
  }
  const zeroPoint = calculateZeroPoint(min, max);
  return (
    <g transform={transform}>
      <rect height={height} width={4} x={width + 1} y={0} fill="#000000" />
      {ticks.map((value, i) => {
        const yTranslate =
          // height * zeroPoint - Math.floor((i * (height * zeroPoint)) / max);
          (height - (value / max) * height) * zeroPoint;
        const tranlateTransform = `translate(0,${yTranslate})`;
        const rectWidth = [0, ticks.length - 1].includes(i) ? 30 : 15;
        return (
          <g key={value} transform={tranlateTransform}>
            <text x={width - rectWidth} textAnchor="end" y="4" fontSize="18">
              {value.toString().substring(0, 4)}
            </text>
            <rect
              x={width - rectWidth + 5}
              width={rectWidth}
              height="4"
              y="-2"
              fill="#000000"
            />
          </g>
        );
      })}

      <g transform="rotate(-90)">
        <text y="20" x={-height / 2} textAnchor="middle" fontSize="18">
          {label}
        </text>
      </g>
    </g>
  );
};

export default YAxis;
