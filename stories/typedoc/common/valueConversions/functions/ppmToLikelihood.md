# Function: ppmToLikelihood()

> **ppmToLikelihood**(`ppm`, `mode`, `positionCounts`, `backgroundFrequencies`?): `number`[][]

Converts position probability matrices (PPM) into likelihood scores.

This function calculates either the log likelihood scores or the frequency of positions based on the input mode. If the background frequencies are not provided, it generates default background frequencies based on the alphabet size derived from the PPM.

## Parameters

• **ppm**: `number`[][]

The position probability matrix where each inner array represents probabilities of various symbols at a particular position.

• **mode**: `string`

Determines the type of likelihood calculation: 'FREQUENCY' for frequency-based scoring or any other value for log likelihood scoring.

• **positionCounts**: `null` \| `number`[]= `null`

If provided, is used to adjust the entropy of the log likelihood scores.

• **backgroundFrequencies?**: `number`[]

Optional. Array of background frequencies of each symbol. If not provided, defaults are used.

## Returns

`number`[][]

Matrix of likelihood scores; structure mirrors that of the input PPM.

## Source

[common/valueConversions.ts:14](https://github.com/riyavsinha/logomakerjs/blob/1a68b30ba77ebc4d7364dc66477b45820dec335d/src/common/valueConversions.ts#L14)
