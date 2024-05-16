# Function: calculateLogLikelihood()

> **calculateLogLikelihood**(`backgroundFrequencies`, `alphabetLength`): (`observedProbabilities`, `observedTotal`) => `number`[]

Calculate log likelihood scores for a probability vector relative to background frequencies.

The observed count total can be provided to apply an entropy adjustment influenced by the size of the alphabet.

## Parameters

• **backgroundFrequencies**: `number`[]

An array of background frequencies.

• **alphabetLength**: `number`

The number of characters in the alphabet used.

## Returns

`Function`

A function that accepts an array of observed counts, and returns an array of log likelihood scores.

### Parameters

• **observedProbabilities**: `number`[]

• **observedTotal**: `null` \| `number`= `null`

### Returns

`number`[]

## Source

[common/utils.tsx:22](https://github.com/riyavsinha/logomakerjs/blob/1a68b30ba77ebc4d7364dc66477b45820dec335d/src/common/utils.tsx#L22)
