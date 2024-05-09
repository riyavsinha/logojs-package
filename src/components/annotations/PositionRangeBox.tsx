import React, { useContext } from "react";
import { LogoContext } from "../../contexts/LogoContext";

export type PositionRangeBoxProps = React.SVGProps<SVGRectElement> & {
  /** The starting position of the box.  */
  startPos: number;
  /** The ending position of the box. */
  endPos: number;
  /**  */
  widthPadding?: number;
  heightPadding?: number;
  /** An SVG Transform string */
  transform?: string;
};

export const PositionRangeBox = (props: PositionRangeBoxProps) => {
  const {
    startPos,
    endPos,
    widthPadding = 0,
    heightPadding = 0,
    ...rest
  } = props;
  const context = useContext(LogoContext);
  const { glyphWidth, height, transform } = context;
  const x = startPos * glyphWidth - widthPadding / 2;
  const y = 0 - heightPadding / 2;
  const width = (endPos - startPos) * glyphWidth + widthPadding;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height + heightPadding}
      transform={transform}
      fill="rgba(0, 0, 0, 0.1)"
      {...rest}
    />
  );
};
