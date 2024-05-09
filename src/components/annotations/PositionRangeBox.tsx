import React, { useContext } from "react";
import { LogoContext } from "../../contexts/LogoContext";
import { rawRange } from "../../common/renderUtils";

export type PositionRangeBoxProps = React.SVGProps<SVGRectElement> & {
  /** The starting position of the box.  */
  startPos: number;
  /** The ending position of the box. */
  endPos: number;
  /** Optional. The extra amount to add total to the box width. This is evenly distributed on both sides. */
  widthPadding?: number;
  /** Optional. The extra amount to add total to the box height. This is evenly distributed on both sides. */
  heightPadding?: number;
  /** How the height of the box should be configured. "full" is the full height of box. "fit" modifies the box height to fit the range of values covered. Default is "full" */
  heightType?: "full" | "fit";
  /** An SVG Transform string */
  transform?: string;
};

export const PositionRangeBox = (props: PositionRangeBoxProps) => {
  const {
    startPos,
    endPos,
    heightType = "full",
    widthPadding = 0,
    heightPadding = 0,
    ...rest
  } = props;
  const { glyphWidth, height, transform, values, maxValue, minValue } =
    useContext(LogoContext);
  const boxValues = values.slice(startPos, endPos);
  const { max: boxMaxValue, min: boxMinValue } = rawRange(boxValues);
  const x = startPos * glyphWidth - widthPadding / 2;
  const y = (() => {
    switch (heightType) {
      case "full":
        return 0;
      case "fit":
        return boxMaxValue / maxValue - heightPadding / 2;
    }
  })();
  const boxHeight = (() => {
    switch (heightType) {
      case "full":
        return height;
      case "fit":
        return ((boxMaxValue - boxMinValue) / (maxValue - minValue)) * height;
    }
  })();
  const width = (endPos - startPos) * glyphWidth + widthPadding;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={boxHeight + heightPadding}
      transform={transform}
      fill="rgba(0, 0, 0, 0.1)"
      {...rest}
    />
  );
};
