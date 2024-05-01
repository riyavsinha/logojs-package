
export const disymbolAlphabet = (x) =>
  x.reduce(
    (ci, ix) => [
      ...ci,
      ...x.reduce(
        (cj, jx) => [
          ...cj,
          {
            component: [ix.component, jx.component],
            color: [ix.color, jx.color],
            regex: ix.regex + jx.regex,
          },
        ],
        []
      ),
    ],
    []
  );