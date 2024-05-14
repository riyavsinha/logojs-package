import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Glyph } from "../../src/components/logo/Glyph";
import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
  a,
  b,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  p,
  q,
  r,
  t,
  u,
  y,
  N1,
  N2,
  N3,
  N4,
  N5,
  N6,
  N7,
  N8,
  N9,
  Dash,
} from "../../src/components/glyphs";

type GlyphRenderArgs = React.SVGProps<SVGPathElement> & {
  boundHeight?: number;
  boundWidth?: number;
};
const GlyphRender = (G: React.FC) => (args: GlyphRenderArgs) => (
  <svg
    height={args.boundHeight || 100}
    width={args.boundWidth || 100}
    style={{ border: "1px solid black" }}
  >
    <G {...args} />
  </svg>
);

const meta = {
  title: "Components/Glyph Characters",
  component: GlyphRender(A),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<GlyphRenderArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AGlyph: Story = {
  render: GlyphRender(A),
  args: {
    boundHeight: 100,
    boundWidth: 100,
  },
};

export const AGlyphFilled = {
  render: GlyphRender(A),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const BGlyph: Story = {
  render: GlyphRender(B),
  args: {
    ...AGlyph.args,
  },
};

export const BGlyphFilled = {
  render: GlyphRender(B),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const CGlyph: Story = {
  render: GlyphRender(C),
  args: {
    ...AGlyph.args,
  },
};

export const CGlyphFilled = {
  render: GlyphRender(C),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const DGlyph: Story = {
  render: GlyphRender(D),
  args: {
    ...AGlyph.args,
  },
};

export const DGlyphFilled = {
  render: GlyphRender(D),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const EGlyph: Story = {
  render: GlyphRender(E),
  args: {
    ...AGlyph.args,
  },
};

export const EGlyphFilled = {
  render: GlyphRender(E),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const FGlyph: Story = {
  render: GlyphRender(F),
  args: {
    ...AGlyph.args,
  },
};

export const FGlyphFilled = {
  render: GlyphRender(F),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const GGlyph: Story = {
  render: GlyphRender(G),
  args: {
    ...AGlyph.args,
  },
};

export const GGlyphFilled = {
  render: GlyphRender(G),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const HGlyph: Story = {
  render: GlyphRender(H),
  args: {
    ...AGlyph.args,
  },
};

export const HGlyphFilled = {
  render: GlyphRender(H),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const IGlyph: Story = {
  render: GlyphRender(I),
  args: {
    ...AGlyph.args,
  },
};

export const IGlyphFilled = {
  render: GlyphRender(I),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const JGlyph: Story = {
  render: GlyphRender(J),
  args: {
    ...AGlyph.args,
  },
};

export const JGlyphFilled = {
  render: GlyphRender(J),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const KGlyph: Story = {
  render: GlyphRender(K),
  args: {
    ...AGlyph.args,
  },
};

export const KGlyphFilled = {
  render: GlyphRender(K),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LGlyph: Story = {
  render: GlyphRender(L),
  args: {
    ...AGlyph.args,
  },
};

export const LGlyphFilled = {
  render: GlyphRender(L),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const MGlyph: Story = {
  render: GlyphRender(M),
  args: {
    ...AGlyph.args,
  },
};

export const MGlyphFilled = {
  render: GlyphRender(M),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const NGlyph: Story = {
  render: GlyphRender(N),
  args: {
    ...AGlyph.args,
  },
};

export const NGlyphFilled = {
  render: GlyphRender(N),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const OGlyph: Story = {
  render: GlyphRender(O),
  args: {
    ...AGlyph.args,
  },
};

export const OGlyphFilled = {
  render: GlyphRender(O),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const PGlyph: Story = {
  render: GlyphRender(P),
  args: {
    ...AGlyph.args,
  },
};

export const PGlyphFilled = {
  render: GlyphRender(P),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const QGlyph: Story = {
  render: GlyphRender(Q),
  args: {
    ...AGlyph.args,
  },
};

export const QGlyphFilled = {
  render: GlyphRender(Q),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const RGlyph: Story = {
  render: GlyphRender(R),
  args: {
    ...AGlyph.args,
  },
};

export const RGlyphFilled = {
  render: GlyphRender(R),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const SGlyph: Story = {
  render: GlyphRender(S),
  args: {
    ...AGlyph.args,
  },
};

export const SGlyphFilled = {
  render: GlyphRender(S),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const TGlyph: Story = {
  render: GlyphRender(T),
  args: {
    ...AGlyph.args,
  },
};

export const TGlyphFilled = {
  render: GlyphRender(T),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const UGlyph: Story = {
  render: GlyphRender(U),
  args: {
    ...AGlyph.args,
  },
};

export const UGlyphFilled = {
  render: GlyphRender(U),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const VGlyph: Story = {
  render: GlyphRender(V),
  args: {
    ...AGlyph.args,
  },
};

export const VGlyphFilled = {
  render: GlyphRender(V),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const WGlyph: Story = {
  render: GlyphRender(W),
  args: {
    ...AGlyph.args,
  },
};

export const WGlyphFilled = {
  render: GlyphRender(W),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const XGlyph: Story = {
  render: GlyphRender(X),
  args: {
    ...AGlyph.args,
  },
};

export const XGlyphFilled = {
  render: GlyphRender(X),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const YGlyph: Story = {
  render: GlyphRender(Y),
  args: {
    ...AGlyph.args,
  },
};

export const YGlyphFilled = {
  render: GlyphRender(Y),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const ZGlyph: Story = {
  render: GlyphRender(Z),
  args: {
    ...AGlyph.args,
  },
};

export const ZGlyphFilled = {
  render: GlyphRender(Z),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseAGlyph: Story = {
  render: GlyphRender(a),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseAGlyphFilled = {
  render: GlyphRender(a),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseBGlyph: Story = {
  render: GlyphRender(b),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseBGlyphFilled = {
  render: GlyphRender(b),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseDGlyph: Story = {
  render: GlyphRender(d),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseDGlyphFilled = {
  render: GlyphRender(d),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseEGlyph: Story = {
  render: GlyphRender(e),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseEGlyphFilled = {
  render: GlyphRender(e),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseFGlyph: Story = {
  render: GlyphRender(f),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseFGlyphFilled = {
  render: GlyphRender(f),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseGGlyph: Story = {
  render: GlyphRender(g),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseGGlyphFilled = {
  render: GlyphRender(g),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseHGlyph: Story = {
  render: GlyphRender(h),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseHGlyphFilled = {
  render: GlyphRender(h),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseIGlyph: Story = {
  render: GlyphRender(i),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseIGlyphFilled = {
  render: GlyphRender(i),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseJGlyph: Story = {
  render: GlyphRender(j),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseJGlyphFilled = {
  render: GlyphRender(j),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseKGlyph: Story = {
  render: GlyphRender(k),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseKGlyphFilled = {
  render: GlyphRender(k),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseLGlyph: Story = {
  render: GlyphRender(l),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseLGlyphFilled = {
  render: GlyphRender(l),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseMGlyph: Story = {
  render: GlyphRender(m),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseMGlyphFilled = {
  render: GlyphRender(m),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseNGlyph: Story = {
  render: GlyphRender(n),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseNGlyphFilled = {
  render: GlyphRender(n),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercasePGlyph: Story = {
  render: GlyphRender(p),
  args: {
    ...AGlyph.args,
  },
};

export const LowercasePGlyphFilled = {
  render: GlyphRender(p),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseQGlyph: Story = {
  render: GlyphRender(q),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseQGlyphFilled = {
  render: GlyphRender(q),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseRGlyph: Story = {
  render: GlyphRender(r),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseRGlyphFilled = {
  render: GlyphRender(r),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseTGlyph: Story = {
  render: GlyphRender(t),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseTGlyphFilled = {
  render: GlyphRender(t),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseUGlyph: Story = {
  render: GlyphRender(u),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseUGlyphFilled = {
  render: GlyphRender(u),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const LowercaseYGlyph: Story = {
  render: GlyphRender(y),
  args: {
    ...AGlyph.args,
  },
};

export const LowercaseYGlyphFilled = {
  render: GlyphRender(y),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number1Glyph: Story = {
  render: GlyphRender(N1),
  args: {
    ...AGlyph.args,
  },
};

export const Number1GlyphFilled = {
  render: GlyphRender(N1),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number2Glyph: Story = {
  render: GlyphRender(N2),
  args: {
    ...AGlyph.args,
  },
};

export const Number2GlyphFilled = {
  render: GlyphRender(N2),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number3Glyph: Story = {
  render: GlyphRender(N3),
  args: {
    ...AGlyph.args,
  },
};

export const Number3GlyphFilled = {
  render: GlyphRender(N3),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number4Glyph: Story = {
  render: GlyphRender(N4),
  args: {
    ...AGlyph.args,
  },
};

export const Number4GlyphFilled = {
  render: GlyphRender(N4),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number5Glyph: Story = {
  render: GlyphRender(N5),
  args: {
    ...AGlyph.args,
  },
};

export const Number5GlyphFilled = {
  render: GlyphRender(N5),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number6Glyph: Story = {
  render: GlyphRender(N6),
  args: {
    ...AGlyph.args,
  },
};

export const Number6GlyphFilled = {
  render: GlyphRender(N6),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number7Glyph: Story = {
  render: GlyphRender(N7),
  args: {
    ...AGlyph.args,
  },
};

export const Number7GlyphFilled = {
  render: GlyphRender(N7),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number8Glyph: Story = {
  render: GlyphRender(N8),
  args: {
    ...AGlyph.args,
  },
};

export const Number8GlyphFilled = {
  render: GlyphRender(N8),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number9Glyph: Story = {
  render: GlyphRender(N9),
  args: {
    ...AGlyph.args,
  },
};

export const Number9GlyphFilled = {
  render: GlyphRender(N9),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const Number0Glyph: Story = {
  render: GlyphRender(O),
  args: {
    ...AGlyph.args,
  },
};

export const Number0GlyphFilled = {
  render: GlyphRender(O),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};

export const DashGlyph: Story = {
  render: GlyphRender(Dash),
  args: {
    ...AGlyph.args,
  },
};

export const DashGlyphFilled = {
  render: GlyphRender(Dash),
  args: {
    ...AGlyph.args,
    fill: "red",
  },
};
