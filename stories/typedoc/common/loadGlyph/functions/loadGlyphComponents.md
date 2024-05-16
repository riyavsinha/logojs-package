# Function: loadGlyphComponents()

> **loadGlyphComponents**(`alphabet`, `overwrite`): `Alphabet`

Populates a alphabet with the appropriate components for rendering its symbols.
Each entry should have a regex field listing the symbols it renders; these may
be a single character or multiple. Supported symbols are A-Z, a-z, and 0-9.

## Parameters

• **alphabet**: `UserDefinedAlphabet`

the symbol list to populate; array of objects with regex and color fields.

• **overwrite**: `boolean`= `false`

## Returns

`Alphabet`

## Source

[common/loadGlyph.tsx:17](https://github.com/riyavsinha/logomakerjs/blob/1a68b30ba77ebc4d7364dc66477b45820dec335d/src/common/loadGlyph.tsx#L17)
