import React from "react";

import { xrange } from "../../common/utils";

type YAxisProps = {
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
  const _numTicks = numTicks || max - min;
  const ticks = xrange(_numTicks + 1).map(
    (x) => (x / _numTicks) * (max - min) + min
  );
  const zeroPoint = min < 0 ? 1 - -min / (max - min) : 1.0;
  console.log("zeroPoint", zeroPoint);
  return (
    <g transform={transform}>
      <rect height={height} width={4} x={width + 1} y={0} fill="#000000" />
      {ticks.map((i) => {
        const yTranslate =
          // height * zeroPoint - Math.floor((i * (height * zeroPoint)) / max);
          (height - (i / max) * height) * zeroPoint;
        const tranlateTransform = `translate(0,${yTranslate})`;
        return (
          <g key={i} transform={tranlateTransform}>
            <text x={width - 15} textAnchor="end" y="4" fontSize="18">
              {i.toString().substring(0, 4)}
            </text>
            <rect x={width - 10} width="15" height="4" y="-2" fill="#000000" />
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
