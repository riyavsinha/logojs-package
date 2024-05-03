import React from "react";

import { maxLabelLength, logLikelihood, FREQUENCY } from "../../common/utils";
import { parseFASTA, parseSequences } from "../../common/fasta";
import XAxis from "./XAxis";
import YAxis from "./YAxis";
import YAxisFrequency from "./yaxisfreq";
import { YGridlines } from "./ygridlines";
import { RawLogo } from "./RawLogo";

/**
 * Renders a logo with x- and y-axes.
 *
 * @prop ppm position probability matrix. Rows are positions and should sum to 1; columns are symbols. If this is provided, it takes precedence over PFM in computing symbol heights.
 * @prop pfm position frequency matrix. Rows are positions and columns are nucleotides, alphabetically.
 * @prop fasta if provided, renders the logo from the given FASTA sequence. Only used if both ppm and pfm are not set.
 * @prop noFastaNames if set and if FASTA is used to compute letter heights, specifies that the FASTA data contains one sequence per line without sequence names.
 * @prop countUnaligned if set and if FASTA is used to compute letter heights, specifies that unaligned positions (dashes) should contribute to information content.
 * @prop constantPseudocount if set and if FASTA is used to compute letter heights, adds this value divided by the alphabet length to the resulting PFM.
 * @prop smallSampleCorrectionOff if set, no small sample correction is performed.
 * @prop mode determines how symbol heights are computed; either FREQUENCY or INFORMATION_CONTENT.
 * @prop height the height of the logo relative to the containing SVG.
 * @prop width the width of the logo relative to the containing SVG.
 * @prop alphabet symbol list mapping columns to colored glyphs.
 * @prop startpos number of the first position in the logo; defaults to 1.
 * @prop negativealpha if set, gives negative symbols a lighter shade than positive symbols.
 * @prop showGridLines if set, shows vertical grid lines.
 * @prop inverted if set, renders negative letters upright rather than upside down.
 * @prop yAxisMax if set, uses an explicit maximum value for the y-axis rather than the total number of bits possible. This is ignored in FREQUENCY mode.
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
}) => {
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
  return (
    <svg
      width={width}
      height={height}
      viewBox={"0 0 " + viewBoxW + " " + viewBoxH}
    >
      {showGridLines && (
        <YGridlines
          {...{
            minrange: startpos,
            maxrange: startpos + ppm.length,
            xstart: 70,
            width: viewBoxW,
            height: maxHeight,
            xaxis_y: 10,
            numberofgridlines: 10 * likelihood.length, //10 grid lines per glyph
          }}
        />
      )}
      <XAxis
        transform={"translate(80," + (maxHeight + 20) + ")"}
        n={likelihood.length}
        glyphWidth={glyphWidth}
        startpos={startpos}
      />
      {mode === FREQUENCY ? (
        <YAxisFrequency
          transform="translate(0,10)"
          width={65}
          height={maxHeight}
          ticks={2}
        />
      ) : (
        <YAxis
          transform="translate(0,10)"
          width={65}
          height={maxHeight}
          bits={max}
          zeroPoint={zeroPoint}
        />
      )}
      <g transform="translate(80,10)">
        <RawLogo
          values={likelihood}
          glyphWidth={glyphWidth}
          // sum subarrays
          stackHeights={likelihood.map(
            (x) => (x.reduce((a, c) => a + c, 0.0) * maxHeight) / max
          )}
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
