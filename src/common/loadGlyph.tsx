import {
  Alphabet,
  AlphabetLetter,
  MonoglyphAlphbetLetter,
  WithRequired,
} from "../types";
import { regexMap } from "./alphabet";

/**
 * Populates a alphabet with the appropriate components for rendering its symbols.
 * Each entry should have a regex field listing the symbols it renders; these may
 * be a single character or multiple. Supported symbols are A-Z, a-z, and 0-9.
 *
 * @param alphabet the symbol list to populate; array of objects with regex and color fields.
 */
export const loadGlyphComponents = (
  alphabet: WithRequired<AlphabetLetter, "regex">[],
  overwrite: boolean = false
): Alphabet =>
  alphabet.map((glyph) => {
    // Monoglyph
    if (glyph.regex.length === 1) {
      const g = glyph as WithRequired<MonoglyphAlphbetLetter, "regex">;
      return {
        ...regexMap[g.regex],
        ...(overwrite ? {} : g),
      };
    }

    // Multiglyph
    const r = glyph.regex;

    // construct components
    let components = [...r].map((c) => regexMap[c].component);
    if (
      !overwrite &&
      Array.isArray(glyph.component) &&
      glyph.component.length === r.length
    ) {
      components = glyph.component;
    }

    // construct colors
    let colors = [...r].map((c) => regexMap[c].color);
    if (!overwrite && glyph.color) {
      // If color is an array, fill with provided colors if matches length, or first color if not
      if (Array.isArray(glyph.color)) {
        if (glyph.color.length === r.length) {
          colors = glyph.color;
        } else {
          // Otherwise, fill with the first color
          colors.fill(glyph.color[0]);
        }
      } else {
        // Fill with single color if provided
        colors.fill(glyph.color);
      }
    }

    return {
      component: components,
      color: colors,
      regex: r,
    };
  });
