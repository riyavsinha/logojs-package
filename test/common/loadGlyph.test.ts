import { describe, expect, test } from "vitest";
import { loadGlyphComponents } from "../../src/common/loadGlyph";
import { regexMap } from "../../src/common/alphabet";
import { C, G } from "../../src";

describe("loadGlyphComponents", () => {
  test("Monoglyph loads correctly when only regex provided", () => {
    const alphabet = [{ regex: "A" }, { regex: "C" }];
    const result = loadGlyphComponents(alphabet);
    expect(result).toEqual([regexMap["A"], regexMap["C"]]);
  });

  test("Monoglyph keeps provided information when overwrite is false", () => {
    const alphabet = [{ regex: "A", color: "black", component: C }];
    const result = loadGlyphComponents(alphabet, false);
    expect(result).toEqual(alphabet);
  });

  test("Monoglyph overwrites provided information when overwrite is true", () => {
    const alphabet = [{ regex: "A", color: "black" }];
    const result = loadGlyphComponents(alphabet, true);
    expect(result).toEqual([regexMap["A"]]);
  });

  test("Multiglyph loads correctly when only regex provided", () => {
    const alphabet = [{ regex: "AC" }, { regex: "CG" }];
    const result = loadGlyphComponents(alphabet);
    expect(result).toEqual([
      {
        component: [regexMap["A"].component, regexMap["C"].component],
        color: ["red", "blue"],
        regex: "AC",
      },
      {
        component: [regexMap["C"].component, regexMap["G"].component],
        color: ["blue", "orange"],
        regex: "CG",
      },
    ]);
  });

  test("Multiglyph keeps provided information when overwrite is false", () => {
    const alphabet = [
      { regex: "AC", color: ["black", "white"], component: [C, G] },
    ];
    const result = loadGlyphComponents(alphabet, false);
    expect(result).toEqual(alphabet);
  });

  test("Multiglyph overwrites provided information when overwrite is true", () => {
    const alphabet = [{ regex: "AC", color: ["black", "white"] }];
    const result = loadGlyphComponents(alphabet, true);
    expect(result).toEqual([
      {
        component: [regexMap["A"].component, regexMap["C"].component],
        color: ["red", "blue"],
        regex: "AC",
      },
    ]);
  });

  test("Multiglyph fills colors with first color when color is not an array", () => {
    const alphabet = [{ regex: "ACG", color: "black" }];
    const result = loadGlyphComponents(alphabet);
    expect(result).toEqual([
      {
        component: [
          regexMap["A"].component,
          regexMap["C"].component,
          regexMap["G"].component,
        ],
        color: ["black", "black", "black"],
        regex: "ACG",
      },
    ]);
  });

  test("Multiglyph fills colors with first color when color array is too short", () => {
    const alphabet = [{ regex: "ACG", color: ["black", "green"] }];
    const result = loadGlyphComponents(alphabet);
    expect(result).toEqual([
      {
        component: [
          regexMap["A"].component,
          regexMap["C"].component,
          regexMap["G"].component,
        ],
        color: ["black", "black", "black"],
        regex: "ACG",
      },
    ]);
  });
});
