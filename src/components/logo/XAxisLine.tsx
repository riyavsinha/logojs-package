import React from "react";
import { calculateZeroPoint } from "../../common/renderUtils";

type XAxisLineProps = {
  min: number;
  max: number;
  height: number;
  width: number;
  transform?: string;
};

export const XAxisLine = ({
  min,
  max,
  width,
  height,
  transform,
}: XAxisLineProps) => {
  const zeroPoint = calculateZeroPoint(min, max);
  return (
    <g transform={transform}>
      <line
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 1,
          // strokeWidth: 2,
          strokeLinecap: "round",
          // strokeLinejoin: "miter",
          strokeOpacity: 1,
          // strokeMiterlimit: 4,
          strokeDasharray: "3,5",
          // strokeDashoffset: 0,
        }}
        transform={`translate(-5,${height * zeroPoint})`}
        x1={0}
        x2={width + 10}
      />
    </g>
  );
};
