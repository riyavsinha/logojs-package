# Function: sequencesToPFM()

> **sequencesToPFM**(`alphabet`, `sequenceText`): `object`

Converts a list of sequences to a position frequency matrix.

## Parameters

• **alphabet**: `UserDefinedAlphabet`

the alphabet to use for the PFM

• **sequenceText**: `string`

the sequences to convert to a PFM. This can be either FASTA format, or one sequence per line.

## Returns

`object`

### count

> **count**: `number`

### pfm

> **pfm**: `number`[][]

## Source

[common/fasta.tsx:10](https://github.com/riyavsinha/logomakerjs/blob/1a68b30ba77ebc4d7364dc66477b45820dec335d/src/common/fasta.tsx#L10)
