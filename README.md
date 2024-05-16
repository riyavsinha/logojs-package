# LogoMakerJS: Embeddable SVG Sequence Logos

**This is forked from and heavily based on https://github.com/weng-lab/logojs-package, and aims to add functionality akin to Python's [LogoMaker](https://logomaker.readthedocs.io/en/latest/index.html)**

LogoMakerJS is a Javascipt package for creating SVG sequence logos.
LogoMakerJS supports a wide range of biological use cases. This README provides a quick overview
of LogoMakerJS installation and usage.

For detailed examples with code samples
are available at our Storybook instance on [GitHub Pages](https://riyavsinha.github.io/logomakerjs/).

LogoMakerJS can be used with and without ReactJS. A companion web app makes it easy to share
SVG logos and generate them in batches from the output of common tools such as the MEME Suite.

## Using in your web application

You can add LogoMakerJS to your project using NPM or Yarn:

```sh
yarn add logomakerjs
```

or

```sh
npm install logomakerjs
```

If you want to use LogoMakerJS in a static web page, you can simply include the package along with React with a few
static script tag, which will add LogoMakerJS to the global namespace as `logomakerjs`:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/logomakerjs@0.1.2/dist/index.js"
  type="text/javascript"
></script>
```

## Quick example: a DNA logo

The transcription factor CTCF binds a well-known consensus DNA sequence, rendered below with LogoMakerJS:

<img src="https://logojs.wenglab.org/svg/eyJwcG0iOltbMC4wOSwwLjMxLDAuMDgsMC41XSxbMC4xOCwwLjE1LDAuNDUsMC4yXSxbMC4zLDAuMDUsMC40OSwwLjE0XSxbMC4wNiwwLjg3LDAuMDIsMC4wM10sWzAsMC45OCwwLDAuMDJdLFswLjgxLDAuMDEsMC4wNywwLjA5XSxbMC4wNCwwLjU3LDAuMzYsMC4wMV0sWzAuMTEsMC40NywwLjA1LDAuMzVdLFswLjkzLDAuMDEsMC4wMywwLjAxXSxbMCwwLDAuOTksMC4wMV0sWzAuMzYsMCwwLjY0LDBdLFswLjA1LDAuMDEsMC41NSwwLjM3XSxbMC4wMywwLDAuOTcsMF0sWzAuMDYsMCwwLjg1LDAuMDddLFswLjExLDAuOCwwLDAuMDddLFswLjQsMC4wMSwwLjU1LDAuMDFdLFswLjA5LDAuNTMsMC4zMywwLjA0XSxbMC4xMiwwLjM1LDAuMDgsMC40M10sWzAuNDQsMC4xOSwwLjI5LDAuMDZdXSwidHlwZWlkIjowLCJzY2FsZSI6MSwiaXNmcmVxIjpmYWxzZSwiZmlyc3RiYXNlIjoxLCJhbHBoYWJldCI6W3sicmVnZXgiOiJBIiwiY29sb3IiOiJyZWQifSx7InJlZ2V4IjoiQyIsImNvbG9yIjoiYmx1ZSJ9LHsicmVnZXgiOiJHIiwiY29sb3IiOiJvcmFuZ2UifSx7InJlZ2V4IjoiVCIsImNvbG9yIjoiIzIyOGIyMiJ9XX0=" alt="CTCF logo" width="50%">

If you use ReactJS, the following code creates the CTCF consensus binding logo:

```jsx
import { DNALogo } from "logomakerjs";

const CTCF_PPM = [
  [0.09, 0.31, 0.08, 0.5],
  [0.18, 0.15, 0.45, 0.2],
  [0.3, 0.05, 0.49, 0.14],
  [0.06, 0.87, 0.02, 0.03],
  [0.0, 0.98, 0.0, 0.02],
  [0.81, 0.01, 0.07, 0.09],
  [0.04, 0.57, 0.36, 0.01],
  [0.11, 0.47, 0.05, 0.35],
  [0.93, 0.01, 0.03, 0.01],
  [0.0, 0.0, 0.99, 0.01],
  [0.36, 0.0, 0.64, 0.0],
  [0.05, 0.01, 0.55, 0.37],
  [0.03, 0.0, 0.97, 0.0],
  [0.06, 0.0, 0.85, 0.07],
  [0.11, 0.8, 0.0, 0.07],
  [0.4, 0.01, 0.55, 0.01],
  [0.09, 0.53, 0.33, 0.04],
  [0.12, 0.35, 0.08, 0.43],
  [0.44, 0.19, 0.29, 0.06],
];

export const CTCFLogo = (props) => <DNALogo data={CTCF_PPM} type="PPM" />;
```

If you don't use React, the following code embeds the DNA logo in a `div` element:

```html
<!doctype html>
<html>
  <body>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/logomakerjs@latest/dist/index.umd.js"
      type="text/javascript"
    ></script>
    <div id="logo" style="width: 500px"></div>
    <script type="text/javascript">
      const CTCF_PPM = [
        [0.09, 0.31, 0.08, 0.5],
        [0.18, 0.15, 0.45, 0.2],
        [0.3, 0.05, 0.49, 0.14],
        [0.06, 0.87, 0.02, 0.03],
        [0.0, 0.98, 0.0, 0.02],
        [0.81, 0.01, 0.07, 0.09],
        [0.04, 0.57, 0.36, 0.01],
        [0.11, 0.47, 0.05, 0.35],
        [0.93, 0.01, 0.03, 0.01],
        [0.0, 0.0, 0.99, 0.01],
        [0.36, 0.0, 0.64, 0.0],
        [0.05, 0.01, 0.55, 0.37],
        [0.03, 0.0, 0.97, 0.0],
        [0.06, 0.0, 0.85, 0.07],
        [0.11, 0.8, 0.0, 0.07],
        [0.4, 0.01, 0.55, 0.01],
        [0.09, 0.53, 0.33, 0.04],
        [0.12, 0.35, 0.08, 0.43],
        [0.44, 0.19, 0.29, 0.06],
      ];
      logomakerjs.embedDNALogo(document.getElementById("logo"), {
        data: CTCF_PPM,
        dataType: "PPM",
      });
    </script>
  </body>
</html>
```
