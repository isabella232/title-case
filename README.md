# title-case

Contains multilingual configuration for adjusting capitalization on address data.

## Usage

Pairs with [pt2itp](https://github.com/ingalls/pt2itp):

```
const titlecase = require('@mapbox/title-case')('en');
```

Returns an object containing:

*minors* - array of strings that should not be adjusted by titlecasing algorithm

*pre* - array of functions to run against the string prior to titlecasing

*post* - array of functions to run against the string after titlecasing
