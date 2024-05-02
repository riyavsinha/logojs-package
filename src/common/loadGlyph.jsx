import { regexMap } from "../common/alphabet";

/**
 * Populates a alphabet with the appropriate components for rendering its symbols.
 * Each entry should have a regex field listing the symbols it renders; these may
 * be a single character or multiple. Supported symbols are A-Z, a-z, and 0-9.
 *
 * @param alphabet the symbol list to populate; array of objects with regex and color fields.
 */
export const loadGlyphComponents = (alphabet) =>
  alphabet.map((glyph) => {
    if (glyph.regex.length === 1)
      return Object.assign({}, glyph, {
        component: regexMap[glyph.regex].component,
      });
    const color =
      (glyph.color && glyph.color.map && glyph.color.length >= 1
        ? glyph.color[0]
        : glyph.color) || "#000000";
    let r = Object.assign({}, glyph, {
      component: [],
      color:
        glyph.color &&
        glyph.color.map &&
        glyph.color.length === glyph.regex.length
          ? glyph.color
          : [],
    });
    for (let i = 0; i < r.regex.length; ++i) {
      r.component.push(regexMap[r.regex[i]].component);
      if (r.color.length === i) r.color.push(color);
    }
    return r;
  });
