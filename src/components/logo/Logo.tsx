import React from "react";

import { maxLabelLength, logLikelihood, FREQUENCY } from "../../common/utils";
import { parseFASTA, parseSequences } from "../../common/fasta";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import { YGridlines } from "./YGridlines";
import { RawLogo } from "./RawLogo";

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
  /** If set and if FASTA is used to compute letter heights, specifies that the FASTA data contains one sequence per line without sequence names. */
  noFastaNames?: boolean;
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
  noFastaNames,
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
    const r = (noFastaNames ? parseSequences : parseFASTA)(
      alphabet,
      fasta.toUpperCase()
    );
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
  let likelihood =
    values ||
    (mode !== FREQUENCY
      ? ppm.map((x, i) => logLikelihood(backgroundFrequencies)(x, sums[i]))
      : ppm.map((x) => x.map((v) => v * Math.log2(alphabetSize))));
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
  console.log(likelihood);
  console.log(likelihood.map((x) => x.reduce((a, c) => a + c, 0.0)));
  console.log(likelihood.map((x) => x.reduce((a, c) => a + c, 0.0) / max));
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