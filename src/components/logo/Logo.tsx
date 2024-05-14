import React, { ReactNode } from "react";

import { sequencesToPFM } from "../../common/fasta";
import { XAxis, XAxisProps } from "./XAxis";
import YAxis, { YAxisProps } from "./YAxis";
import { YGridlines, YGridlinesProps } from "./YGridlines";
import { RawLogo, RawLogoProps } from "./RawLogo";
import {
  generateDefaultBackgroundFrequencies,
  pfmToPpm,
  ppmToLikelihood,
} from "../../common/valueConversions";
import { DataType, LogoMode, UserDefinedAlphabet } from "../../types";
import {
  frequencyRange,
  getBounds,
  informationContentRange,
  rawRange,
  xAxisLabelHeight,
  yAxisWidth,
} from "../../common/renderUtils";
import { XAxisLine, XAxisLineProps } from "./XAxisLine";
import { LogoContext } from "../../contexts/LogoContext";

export type LogoProps = {
  /** Data matrix to render. The type of data must be specified using `dataType`. */
  data: number[][] | string;
  /** The type of data provided. Either a PPM, PFM, FASTA or VALUES. This determines how the data is processed to reach the liklihood scores. Type VALUES is not processed and used as-is. */
  dataType: DataType;
  /** Optional, Recommended. Determines how symbol heights are computed: FREQUENCY, INFORMATION_CONTENT, or RAW. Default is INFORMATION_CONTENT. */
  mode?: LogoMode;
  /** Optional, Recommended. The height of the logo relative to the containing SVG. If this is not specified, `width` must be specified. */
  height?: number;
  /** Optional, Recommended. The width of the logo relative to the containing SVG. If this is not specified, `height` must be specified. */
  width?: number;
  /** Symbol list mapping columns to colored glyphs. */
  alphabet: UserDefinedAlphabet;
  /** Optional. The width of a single glyph, relative to the containing SVG. Defaults to 1. */
  glyphWidthScaler?: number;
  /** Optional. Number to assign the first position in the logo. Defaults to 1. */
  startPos?: number;
  /** Optional. If set, shows vertical grid lines. */
  showGridLines?: boolean;
  /** Optional. Background frequencies for the alphabet. By default, uses a uniform distribution across all alphabet members. */
  backgroundFrequencies?: number[];
  /** Optional (DataTypes: [`PFM`, `FASTA`]). If set, this value is used to adjust PFM/FASTA data types. */
  constantPseudocount?: number;
  /** Optional (DataTypes: [`PFM`, `FASTA`]). If set, used to adjust PFM/FASTA data matrices */
  useSmallSampleCorrection?: boolean;
  /** Optional. If set, uses an explicit maximum value for the y-axis. This is ignored in FREQUENCY mode. */
  yAxisMax?: number;
  /** Optional. If set, uses an explicit minimum value for the y-axis. This is ignored in FREQUENCY mode */
  yAxisMin?: number;
  /** Optional. Whether to show the XAxis labels. Defaults to true. */
  showXAxis?: boolean;
  /** Optional. Whether to show a dotted line at the zero-line on the x-axis. Defaults to true. */
  showXAxisLine?: boolean;
  /** Optional. Whether to show the Y-Axis scale. */
  showYAxis?: boolean;
  /** Optional. Padding between the Y-Axis and the logo. Defaults to 15. */
  yAxisToLogoPadding?: number;
  /** Optional. Padding between the top of the logo and the top of the SVG. Defaults to 10. */
  topPadding?: number;
  /** Optional. Padding between the bottom of the logo and the bottom of the SVG. Defaults to 0. */
  bottomPadding?: number;
  /** Optional. Padding between the left of the logo and the left of the SVG. Defaults to 0. */
  leftPadding?: number;
  /** Optional. Padding between the right of the logo and the right of the SVG. Defaults to 0. */
  rightPadding?: number;
  /** Optional. Callback for handling events when a glyph is moused over */
  onSymbolMouseOver?: (symbol: any) => void;
  /** Optional. Callback for handling events when a glyph is moused out from */
  onSymbolMouseOut?: (symbol: any) => void;
  /** Optional. Callback for handling click events on a glyph */
  onSymbolClick?: (symbol: any) => void;
  /** Optional (DataTypes: [`FASTA`]). If set and if FASTA is used to compute letter heights, specifies that unaligned positions (dashes) should contribute to information content. */
  countUnaligned?: boolean;
  /** Optional. For long sequence logos, you may want to increase this value in order to increase the size of the axes proportional to the logo. Defaults to 1. */
  logoZoomFactor?: number;
  symmetricYAxis?: boolean;
  /** Optional. Any extra props modifying the `RawLogo` component can be passed here. */
  RawLogoProps?: Partial<RawLogoProps>;
  /** Optional. Any extra props modifying the `YAxisProps` component can be passed here. */
  YAxisProps?: Partial<YAxisProps>;
  /** Optional. Any extra props modifying the `YGridlinesProps` component can be passed here. */
  YGridlinesProps?: Partial<YGridlinesProps>;
  /** Optional. Any extra props modifying the `XAxisProps` component can be passed here. */
  XAxisProps?: Partial<XAxisProps>;
  /** Optional. Any extra props modifying the `XAxisLineProps` component can be passed here. */
  XAxisLineProps?: Partial<XAxisLineProps>;
  /** Optional. Any extra props modifying the `SVG` component can be passed here. */
  SVGProps?: Partial<React.SVGProps<SVGSVGElement>>;
  /** Optional. Annotations to place on the logo. */
  annotations?: ReactNode[];
};
export const Logo = ({
  data,
  alphabet,
  dataType,
  startPos = 1,
  glyphWidthScaler = 1,
  backgroundFrequencies,
  width,
  height,
  showGridLines,
  onSymbolMouseOver,
  onSymbolMouseOut,
  onSymbolClick,
  mode = "INFORMATION_CONTENT",
  yAxisMax,
  yAxisMin,
  useSmallSampleCorrection,
  constantPseudocount,
  countUnaligned,
  annotations,
  logoZoomFactor,
  RawLogoProps,
  showXAxis = true,
  showYAxis = true,
  symmetricYAxis = false,
  yAxisToLogoPadding = 15,
  topPadding = 10,
  bottomPadding = 0,
  leftPadding = 0,
  rightPadding = 0,
  YAxisProps,
  YGridlinesProps,
  XAxisProps,
  XAxisLineProps,
  SVGProps,
  showXAxisLine = true,
}: LogoProps) => {
  const alphabetSize = alphabet.length;
  const _backgroundFrequencies =
    backgroundFrequencies ?? generateDefaultBackgroundFrequencies(alphabetSize);

  // Convert data to rendering values based on the mode (only not processed if DataType `VALUES` is provided)
  let values: number[][];
  if (typeof data === "string") {
    const pfmResult = sequencesToPFM(alphabet, data);
    const [ppm, totalCounts] = pfmToPpm(
      pfmResult.pfm,
      constantPseudocount,
      useSmallSampleCorrection,
      countUnaligned ? pfmResult.count : undefined
    );
    values = ppmToLikelihood(ppm, mode, totalCounts);
  } else if (dataType === DataType.VALUES) {
    values = data;
  } else if (dataType === DataType.PPM) {
    values = ppmToLikelihood(data, mode);
  } else if (dataType === DataType.PFM) {
    const [ppm, totalCounts] = pfmToPpm(
      data,
      constantPseudocount,
      useSmallSampleCorrection
    );
    values = ppmToLikelihood(ppm, mode, totalCounts);
  } else {
    throw new Error("Invalid data type");
  }

  // Based on the mode, calculate the theoretical max and min values for the y-axis
  const { max, min } = (() => {
    switch (mode) {
      case "FREQUENCY":
        return frequencyRange(alphabetSize);
      case "INFORMATION_CONTENT":
        return informationContentRange(_backgroundFrequencies);
      case "RAW":
        return rawRange(values);
      default:
        throw new Error(`Invalid mode "${mode}" provided.`);
    }
  })();
  let _max = yAxisMax || max;
  let _min = yAxisMin || min;
  if (symmetricYAxis) {
    _max = Math.max(Math.abs(_max), Math.abs(_min));
    _min = -_max;
  }

  const label = (() => {
    switch (mode) {
      case "FREQUENCY":
        return "frequency";
      case "INFORMATION_CONTENT":
        return "bits";
      case "RAW":
        return "value";
      default:
        throw new Error(`Invalid mode "${mode}" provided.`);
    }
  })();

  // Calculate base bounds for logo, and adjust for axes
  const { maxHeight, glyphWidth, viewBoxW } = getBounds(
    values,
    _max,
    logoZoomFactor,
    glyphWidthScaler
  );
  const effectiveYAxisWidth = showYAxis ? yAxisWidth() + yAxisToLogoPadding : 0;
  const effectiveXAxisHeight = showXAxis
    ? xAxisLabelHeight(values, startPos)
    : 0;
  const adjustedViewBoxH =
    maxHeight + effectiveXAxisHeight + topPadding + bottomPadding;
  const adjustedViewBoxW =
    viewBoxW + effectiveYAxisWidth + leftPadding + rightPadding;

  const baseYTransform = topPadding;
  const baseXTransform = effectiveYAxisWidth + leftPadding;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${adjustedViewBoxW} ${adjustedViewBoxH}`}
      {...SVGProps}
    >
      {showGridLines && (
        <YGridlines
          xEnd={glyphWidth * values.length}
          yEnd={maxHeight}
          numGridlines={5 * values.length} // 5 grid lines per glyph
          transform={`translate(${baseXTransform},${baseYTransform})`}
          {...YGridlinesProps}
        />
      )}
      {showXAxisLine && (
        <XAxisLine
          max={_max}
          min={_min}
          height={maxHeight}
          width={viewBoxW}
          transform={`translate(${baseXTransform},${baseYTransform})`}
          {...XAxisLineProps}
        />
      )}
      {showXAxis && (
        <XAxis
          transform={`translate(${baseXTransform},${maxHeight + 20 + topPadding})`}
          n={values.length}
          glyphWidth={glyphWidth}
          startPos={startPos}
          {...XAxisProps}
        />
      )}
      {showYAxis && (
        <YAxis
          transform={`translate(${leftPadding},${topPadding})`}
          width={65}
          height={maxHeight}
          max={mode === "FREQUENCY" ? 1 : _max}
          min={mode === "FREQUENCY" ? 0 : _min}
          label={label}
          symmetric={symmetricYAxis}
          {...YAxisProps}
        />
      )}
      <LogoContext.Provider
        value={{
          glyphWidth,
          height: maxHeight,
          transform: `translate(${baseXTransform},${baseYTransform})`,
          values: values,
          maxValue: _max,
          minValue: _min,
        }}
      >
        {annotations}
      </LogoContext.Provider>
      <g transform={`translate(${baseXTransform},${baseYTransform})`}>
        <RawLogo
          values={values}
          glyphWidth={glyphWidth}
          maxValue={_max}
          minValue={_min}
          height={maxHeight}
          alphabet={alphabet}
          onSymbolMouseOver={onSymbolMouseOver}
          onSymbolMouseOut={onSymbolMouseOut}
          onSymbolClick={onSymbolClick}
          {...RawLogoProps}
        />
      </g>
    </svg>
  );
};
