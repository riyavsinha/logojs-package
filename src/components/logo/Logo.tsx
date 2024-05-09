import React, { ReactNode } from "react";

import { FREQUENCY } from "../../common/utils";
import { sequencesToPFM } from "../../common/fasta";
import XAxis, { XAxisProps } from "./XAxis";
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
  YAxisProps,
  YGridlinesProps,
  XAxisProps,
  XAxisLineProps,
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
  const _max = yAxisMax || max;
  const _min = yAxisMin || min;

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
  const adjustedViewBoxH = maxHeight + xAxisLabelHeight(values, startPos);
  const adjustedViewBoxW = viewBoxW + yAxisWidth();

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${adjustedViewBoxW} ${adjustedViewBoxH}`}
    >
      {showGridLines && (
        <YGridlines
          xEnd={glyphWidth * values.length}
          yEnd={maxHeight}
          numGridlines={5 * values.length} // 5 grid lines per glyph
          transform={"translate(80,10)"}
          {...YGridlinesProps}
        />
      )}
      <XAxisLine
        max={_max}
        min={min}
        height={maxHeight}
        width={viewBoxW}
        transform="translate(80,10)"
        {...XAxisLineProps}
      />
      <XAxis
        transform={`translate(80,${maxHeight + 20})`}
        n={values.length}
        glyphWidth={glyphWidth}
        startPos={startPos}
        {...XAxisProps}
      />
      <YAxis
        transform="translate(0,10)"
        width={65}
        height={maxHeight}
        max={mode === FREQUENCY ? 1 : _max}
        min={mode === FREQUENCY ? 0 : _min}
        label={label}
        {...YAxisProps}
      />
      <LogoContext.Provider
        value={{
          glyphWidth,
          height: maxHeight,
          transform: "translate(80, 10)",
        }}
      >
        {annotations}
      </LogoContext.Provider>
      <g transform="translate(80,10)">
        <RawLogo
          values={values}
          glyphWidth={glyphWidth}
          maxValue={_max}
          minValue={min}
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
