import React, { useContext } from "react";
import { LogoContext } from "../../contexts/LogoContext";
import { rawRange } from "../../common/renderUtils";

export type TrianglePositionIndicatorProps =
  React.SVGProps<SVGPolygonElement> & {
    /** The starting position of the box.  */
    pos: number;
    /** Optional. A label to show text below the indicator */
    label?: string;
    /** Optional. The extra amount to add total to the box width. This is evenly distributed on both sides. */
    widthPadding?: number;
    /** Optional. The extra amount to add total to the box height. This is evenly distributed on both sides. */
    heightPadding?: number;
    /** An SVG Transform string */
    transform?: string;
    glyphRelativeWidth?: number;
  };

export const TrianglePositionIndicator = (
  props: TrianglePositionIndicatorProps
) => {
  const {
    pos,
    label,
    widthPadding = 0,
    heightPadding = 0,
    glyphRelativeWidth = 0.5,
    ...rest
  } = props;
  const { glyphWidth, height, transform, maxValue, minValue } =
    useContext(LogoContext);

  const x =
    pos * glyphWidth +
    (glyphWidth / 2 - (glyphRelativeWidth * glyphWidth) / 2) -
    widthPadding / 2;
  console.log(pos, glyphWidth, widthPadding, x);
  console.log(x);
  const y = height + heightPadding / 2;
  console.log(height);

  const scaleFactor = (glyphWidth / 100) * glyphRelativeWidth;
  const scaleTransform = `scale(${scaleFactor})`;
  const translateTransform = `translate(${x}, ${y})`;
  const transformString = `${translateTransform} ${transform ?? ""}`;

  return (
    <g
      width={glyphWidth - 50}
      transform={transformString}
      fill="rgba(0, 0, 0, 0.1)"
      {...rest}
    >
      <polygon points="50,0 100,100 0,100" transform={scaleTransform} />
    </g>
  );
};
