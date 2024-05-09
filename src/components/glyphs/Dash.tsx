import React from "react";

const _path = "M 0 35 H 100 V 65 H 0 V 35";

export const Dash = (props: React.SVGProps<SVGPathElement>) => (
  <path {...props} d={_path} />
);
