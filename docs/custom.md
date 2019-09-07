# Custom Logos

## Overview

LogosJ supports a wide array of customizations for logos. You can use custom alphabets, make
logos where some letters extend below the x-axis, or take advantage of SVG components to layer
on custom annotations. Several advanced React components are available offering varying degrees
of customization.

<a name="alphabets"></a>
## Custom alphabets

You can use any combination of symbols you like in your logos. The **custom alphabets** page in
the **Building blocks: glyphs and alphabets** section has details. Once you have a custom alphabet,
you can render a logo with it using the `Logo` component, which takes the following properties:

* **pwm**: a matrix containing nucleotide frequencies at each position. Each
row is a position in the logo, and the columns correspond to the symbol order defined in the alphabet array.
* **mode**: determines how letter heights are computed; may be either
`"INFORMATION_CONTENT"` (default) or `"FREQUENCY"`.
* **startpos**: if set, the first base in the logo will be numbered with a
value other than the default of 1.
* **alphabet**: the custom alphabet containing the symbols the logos should render.

The following complete example renders a logo with **M** and **W** representing methylated **CpG**:

```js
import { Logo } from 'logosj-react';
const METHYL_PWM = [
  [0,0,0,1,0,0]
  [0,0,0,1,0,0]
  [0.3,0,0.3,0.4,0,0]
  [0,0,0,0,1,0]
  [0,0,0,0,0,1]
  [0,0.6,0,0.4,0,0]
  [1,0,0,0,0,0]
];
const METHYL_ALPHABET = [
  {"color":"#880088","regex":"A"}
  {"color":"#880000","regex":"C"}
  {"color":"#000088","regex":"G"}
  {"color":"#888800","regex":"T"}
  {"color":"#ff0000","regex":"M"}
  {"color":"#008888","regex":"W"}
];

export const MethylLogo = props => (
    <Logo pwm={METHYL_PWM} alphabet={METHYL_ALPHABET} />
);
```

To embed a `Logo` outside of React, use the `embedLogo` function, which takes the following
arguments:

* **div** the `div` element in which to render the logo
* **properties** object containing the properties listed above

<a name="negatives"></a>
## Negative letters

The `LogosWithNegatives` component allows letters to extend below the x-axis. In this case, the
values in the matrix represent the raw heights above (or below) the x-axis, and the y-axis will
autoscale. The component accepts the following properties:

* **pwm** matrix containing the heights of the letters at each position; values can be positive or negative.
* **startpos** if set, the first base in the logo will be numbered with a
value other than the default of 1.
* **alphabet** the custom alphabet containing the symbols the logos should render.
* **negativealpha** if provided, specifies that letters below the x-axis should be semi-transparent
* **inverted** if provided, specifies that letters below the x-axis should be rendered upright
rather than upside-down, which is the default.

The following complete example renders a DNA logo with some negative letters:

```js
import { LogoWithNegatives, DNAGlyphmap } from 'logosj-react';
const DNA_PWM = [
  [0,0,0,0], [-0.5,0.5,-0.5,0.5], [0.5,-2,-2,3],
  [2.5,-2,0.5,-0.5], [4.5,-1,-2,-2.5], [-1,-1,0,2],
  [-1.5,-0.5,0.5,1.5], [1.5,-1.5,1,-0.5], [-1,1,0,0]
  [0,0,0,0]
];

export const DNALogo = props => (
    <LogoWithNegatives pwm={DNA_PWM} glyphmap={DNAGlyphmap} negativealpha={101} />
);
```

To embed a `LogoWithNegatives` outside of React, use the `embedLogoWithNegatives` function, which
takes the following arguments:

* **div** the `div` element in which to render the logo
* **properties** object containing the properties listed above

<a name="rawlogo"></a>
## Logos without axes

Logos do not need to be rendered with the default, built-in axes. LogosJ provides a `RawLogo` component
which just renders glyphs. A `RawLogo` component does not render its own `<svg>` tag; you need to provide it
yourself. This adds flexibility, however, to render the logo on top of other SVG annotations.

The value matrix passed to a `RawLogo` specifies the raw heights of the contained letters. A value of 1 will
render a letter which is 100 units high, relative to the SVG's coordinate system. By default, all positions
are 100 units wide. `RawLogo` components support multiple letters per symbol.

A `RawLogo` takes the following properties:

* **pwm** matrix containing the raw heights of the letters (divided by a factor of 100 units relative to the SVG's
coordinate system).
* **glyphWidth** the width of a single glyph relative to the containing SVG's coordinate system; defaults to 100.
* **stackHeight** the height of a single stack of glyphs relative to the containing SVG's coordinate system; defaults to 100.
Individual letters can exceed this, in which case they may extend past the SVG's borders.
* **alphabet** the custom alphabet containing the symbols the logos should render.

The following example renders a `RawLogo` containing a DNA sequence with some letters grayed out. Note that the `RawLogo`
must be rendered within a containing `svg`, and is shifted to the desired position by transforming a `g` element:

```js
import { RawLogo } from 'logosj-react';
const ANNOTATED_PWM = [
  [2,0,0,0,0,0,0,0]
  [0,0,2,0,0,0,0,0]
  [2,0,0,0,0,0,0,0]
  [2,0,0,0,0,0,0,0]
  [0,2,0,0,0,0,0,0]
  [2,0,0,0,0,0,0,0]
  [0,0,0,0,0.25,0.25,0.25,0.25]
  [0,0,0,0,0.25,0.25,0.25,0.25]
  [0,0,0,0,0.25,0.25,0.25,0.25]
  [0,0,0,2,0,0,0,0]
  [0,0,2,0,0,0,0,0]
  [0,0,0,2,0,0,0,0]
  [0,0,0,2,0,0,0,0]
  [0,2,0,0,0,0,0,0]
  [0,0,0,2,0,0,0,0]
];
const ANNOTATED_GLYPHMAP = [
  {"regex":"A","color":"red"}
  {"regex":"C","color":"blue"}
  {"regex":"G","color":"orange"}
  {"regex":"T","color":"#228b22"}
  {"color":"#aaaaaa","regex":"A"}
  {"color":"#aaaaaa","regex":"C"}
  {"color":"#aaaaaa","regex":"G"}
  {"color":"#aaaaaa","regex":"T"}
];

export const AnnotatedLogo = props => (
  <svg viewBox="0 0 1530 330">
    <g transform="translate(20,-40)" id="logo">
      <RawLogo pwm={ANNOTATED_PWM} glyphmap={ANNOTATED_GLYPHMAP} glyphWidth={100} stackHeight={300} />
    </g>
  </svg>
);
```

To embed a `RawLogo` outside of React, use the `embedRawLogo` function, which takes the following
arguments:

* **element** the SVG element in which to render the logo
* **properties** object containing the properties listed above

<a name="advanced"></a>
## Custom annotations

When a `RawLogo` is rendered within an `svg`, a variety of custom annotations can be layered on as desired
using custom SVG components. The following example renders two logos on top of each other, one representing
a reference sequence with a SNP and the other a motif interrupted by the SNP. The SNP is highlighted in gray
and the logos labeled with text labels. For more examples, see our companion site, https://logosj.wenglab.org/.

```js
import { RawLogo, DNAGlyphmap } from 'logosj-react';
const SNP_PWM = [
  [0.05,0.05,0,0]
  [0,0,0.3,0.7]
  [0,0,0.05,0.05]
  [0,0,0,2]
  [0.6,0,0,0.8]
  [0,2,0,0]
  [0.8,0.8,0,0]
  [0,0,0.1,0]
];
const REFERENCE_PWM = [
  [2,0,0,0]
  [0,0,0,2]
  [2,0,0,0]
  [0,2,0,0]
  [0,0,0,2]
  [0,2,0,0]
  [0,2,0,0]
  [0,0,0,2]
];

export const SNPLogo = props => (
  <svg viewBox="0 0 1100 420">
    <rect x={600} width={100} height={420} fill="#bbbbbb" />
    <g transform="translate(300,0)">
      <RawLogo glyphmap={DNAGlyphmap} pwm={SNP_PWM} glyphWidth={100} stackHeight={200} />
    </g>
    <g transform="translate(300, 220)">
      <RawLogo glyphmap={DNAGlyphmap} pwm={REFERENCE_PWM} glyphWidth={100} stackHeight={200} />
    </g>
    <text y={150} x={260} textAnchor="end" style={{ fontSize: "50px" }}>PWM</text>
    <text y={350} x={260} textAnchor="end" style={{ fontSize: "50px" }}>reference</text>
  </svg>
);
```