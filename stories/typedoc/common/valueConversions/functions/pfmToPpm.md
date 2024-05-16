# Function: pfmToPpm()

> **pfmToPpm**(`pfm`, `constantPseudocount`, `useSmallSampleCorrection`, `numSequences`?): [`number`[][], `null` \| `number`[]]

Converts a Position Frequency Matrix (PFM) into a Position Probability Matrix (PPM) and optionally returns the total counts from the PFM to use for relative pseudocount calculations.

By default, the function applies a small sample correction to the PFM to prevent zero probabilities. If a constant pseudocount is provided, it is added to each count in the PFM instead. If small sample correction is disabled, the function does no correction.

## Parameters

• **pfm**: `number`[][]

The Position Frequency Matrix, a 2D array where each inner array represents nucleotide counts at a particular position in the sequence.

• **constantPseudocount**: `number`= `0`

A fixed number added to each count in the PFM to prevent zero probabilities. Defaults to 0.

• **useSmallSampleCorrection**: `boolean`= `true`

Indicates whether to use position counts to create relative pseudocounts.

• **numSequences?**: `number`

The total number of sequences used to generate the PFM. If provided, it is used as the denominator while calculating PPM instead of provided constant psuedocounts or calculated relative pseudocounts.

## Returns

[`number`[][], `null` \| `number`[]]

A tuple where the first element is the PPM (Position Probability Matrix), a 2D array representing probabilities at each position, and the second element is an array of total counts per position if small sample correction was applied; otherwise, null.

## Source

[common/valueConversions.ts:51](https://github.com/riyavsinha/logomakerjs/blob/1a68b30ba77ebc4d7364dc66477b45820dec335d/src/common/valueConversions.ts#L51)
