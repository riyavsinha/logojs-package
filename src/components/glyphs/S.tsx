import React from "react";

const _path = `M92 26 A43 20 0 1 0 43 46 A42 23 0 1 1 9 68`;

export const S = (props: React.SVGProps<SVGPathElement>) => (
  <path
    fill="#ffffff"
    strokeWidth="18"
    stroke={props.fill || "#000000"}
    strokeOpacity={props.fillOpacity}
    d={_path}
  />
);
