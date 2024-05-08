import React from "react";

import { maxLabelLength, logLikelihood, FREQUENCY } from "../../common/utils";
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

type LogoProps = {
  /** Position probability matrix. Rows are positions and should sum to 1; columns are symbols. If this is provided, it takes precedence over PFM in computing symbol heights. */
  ppm?: number[][];
  /** Position frequency matrix. Rows are positions and columns are nucleotides, alphabetically. */
  pfm?: number[][];
  /** Direct values to plot. Overrides PPM and PFM. */
  values?: number[][];
  /** If provided, renders the logo from the given FASTA sequence. Only used if both ppm and pfm are not set. */
  fasta?: string;
  /** Determines how symbol heights are computed; either FREQUENCY or INFORMATION_CONTENT. */
  mode?: "INFORMATION_CONTENT" | "FREQUENCY";
  /** The height of the logo relative to the containing SVG. */
  height: number;
  /** The width of the logo relative to the containing SVG. */
  width: number;
  /** Symbol list mapping columns to colored glyphs. */
  alphabet: any;
  /** The width of a single glyph, relative to the containing SVG. Defaults to 100. */
  glyphwidth?: number;
  /** Number clipping width or height(?) */
  scale?: number;
  /** Number to assign the first position in the logo; defaults to 1. */
  startpos?: number;
  /** If set, shows vertical grid lines. */
  showGridLines?: boolean;
  /** Background frequencies for the alphabet. */
  backgroundFrequencies?: number[];
  /** If set and if FASTA is used to compute letter heights, adds this value divided by the alphabet length to the resulting PFM. */
  constantPseudocount?: number;
  /** If set, no small sample correction is performed. */
  smallSampleCorrectionOff?: boolean;
  /** If set, uses an explicit maximum value for the y-axis rather than the total number of bits possible. This is ignored in FREQUENCY mode. */
  yAxisMax?: number;
  /** Callback for handling events when a glyph is moused over */
  onSymbolMouseOver?: (symbol: any) => void;
  /** Callback for handling events when a glyph is moused out from */
  onSymbolMouseOut?: (symbol: any) => void;
  /** Callback for handling click events on a glyph */
  onSymbolClick?: (symbol: any) => void;
  /** If set and if FASTA is used to compute letter heights, specifies that unaligned positions (dashes) should contribute to information content. */
  countUnaligned?: boolean;
  /** Degrees to rotate the x-axis. Default is -90. */
  xAxisRotation?: number;
};

/**
 * Renders a logo with x- and y-axes.
 */
export const Logo = ({
  ppm,
  pfm,
  values,
  fasta,
  mode,
  height,
  width,
  alphabet,
  glyphwidth,
  scale,
  startpos,
  showGridLines,
  backgroundFrequencies,
  constantPseudocount,
  smallSampleCorrectionOff,
  yAxisMax,
  onSymbolMouseOver,
  onSymbolMouseOut,
  onSymbolClick,
  countUnaligned,
  xAxisRotation,
}: LogoProps) => {
  /* compute likelihood; need at least one entry to continue */
  let count = null;
  const relativePseudocount =
    (pfm || fasta) && !constantPseudocount && !countUnaligned
      ? !smallSampleCorrectionOff
      : false;
  const pseudocount = relativePseudocount
    ? 0
    : (constantPseudocount || 0) / alphabet.length;
  if (!ppm && !pfm && fasta) {
    const r = sequencesToPFM(alphabet, fasta);
    pfm = r.pfm;
    count = r.count || 1;
  }
  const sums =
    relativePseudocount &&
    pfm &&
    pfm.map &&
    pfm
      .map((x) => x.reduce((t, v, i) => (i === undefined ? t : v + t), 0.0))
      .map((x) =>
        x === 0 ? 0 : (alphabet.length - 1) / (2 * Math.log(2) * x)
      );
  if (!ppm && pfm && pfm.map)
    ppm = pfm.map((column, i) => {
      const sum =
        (count && countUnaligned
          ? count
          : column.reduce((a, c) => a + c, 0.0) +
            pseudocount * alphabet.length) || 1;
      return column.map((x) => (x + pseudocount) / sum);
    });
  if (ppm.length === 0 || ppm[0].length === 0) return <div />;
  let alphabetSize = ppm[0].length;
  if (!backgroundFrequencies)
    backgroundFrequencies = ppm[0].map((_) => 1.0 / alphabetSize);
  // let likelihood =
  let likelihood;
  //   values ||
  // (mode !== FREQUENCY
  //   ? ppm.map((x, i) => logLikelihood(backgroundFrequencies)(x, sums[i]))
  //   : ppm.map((x) => x.map((v) => v * Math.log2(alphabetSize))));
  if (mode === FREQUENCY) {
    likelihood = ppm.map((x) => x.map((v) => v * Math.log2(alphabetSize)));
  } else {
    likelihood = ppm.map((x, i) => {
      return logLikelihood(backgroundFrequencies)(x, sums[i]);
    });
  }
  const theights =
    mode === FREQUENCY
      ? [Math.log2(alphabetSize)]
      : backgroundFrequencies.map((x) => Math.log2(1.0 / (x || 0.01)));
  const max = yAxisMax || Math.max(...theights),
    min = Math.min(...theights);
  const zeroPoint = min < 0 ? max / (max - min) : 1.0;

  /* misc options */
  startpos = !isNaN(parseFloat(startpos)) && isFinite(startpos) ? startpos : 1;

  /* compute scaling factors */
  let maxHeight = 100.0 * max;
  let glyphWidth = (maxHeight / 6.0) * (glyphwidth || 1.0);

  /* compute viewBox and padding for the x-axis labels */
  let viewBoxW = likelihood.length * glyphWidth + 80;
  let viewBoxH =
    maxHeight + 18 * (maxLabelLength(startpos, likelihood.length) + 1);
  if (scale) viewBoxW > viewBoxH ? (width = scale) : (height = scale);
  return (
    <svg
      width={width}
      height={height}
      viewBox={"0 0 " + viewBoxW + " " + viewBoxH}
    >
      {showGridLines && (
        <YGridlines
          xEnd={glyphWidth * likelihood.length}
          yEnd={maxHeight}
          numGridlines={5 * likelihood.length} // 5 grid lines per glyph
          transform={"translate(80,10)"}
        />
      )}
      <XAxis
        transform={"translate(80," + (maxHeight + 20) + ")"}
        n={likelihood.length}
        glyphWidth={glyphWidth}
        startPos={startpos}
        rotation={xAxisRotation}
      />
      <YAxis
        transform="translate(0,10)"
        width={65}
        height={maxHeight}
        max={mode === FREQUENCY ? 1 : max}
        zeroPoint={zeroPoint}
        numTicks={2}
        label={mode === FREQUENCY ? "frequency" : "bits"}
      />
      <g transform="translate(80,10)">
        <RawLogo
          values={likelihood}
          glyphWidth={glyphWidth}
          // sum subarrays
          stackHeights={likelihood.map((x) => x.reduce((a, c) => a + c, 0.0))}
          stackMaxHeight={max}
          height={maxHeight}
          alphabet={alphabet}
          onSymbolMouseOver={onSymbolMouseOver}
          onSymbolMouseOut={onSymbolMouseOut}
          onSymbolClick={onSymbolClick}
        />
      </g>
    </svg>
  );
};

export type Logov2Props = {
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
};
export const Logov2 = ({
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
  logoZoomFactor,
  RawLogoProps,
  YAxisProps,
  YGridlinesProps,
  XAxisProps,
  XAxisLineProps,
}: Logov2Props) => {
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
