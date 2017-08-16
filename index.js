function cardinality(cc) {
    if (cc === 'en')
        return (str) => {
            return str.replace(
                /(^|\s)(n\.w\.|nw|n\.e\.|ne|s\.w\.|sw|s\.e\.|se)(\s|$)/gi,
                (match, g1, g2, g3) => {
                    return g1 + g2.toUpperCase().replace('.', '') + g3;
                }
            );
        };
    else
        throw new Error(cc + ' is not a currently supported language code for the cardinality function');
}

module.exports = function(cc) {
    if (cc === 'en') {
    return {
        pre: [],
        post: [ cardinality(cc) ],
        minors: [
            'a',
            'an',
            'and',
            'as',
            'at',
            'but',
            'by',
            'en',
            'for',
            'from',
            'how',
            'if',
            'in',
            'neither',
            'nor',
            'of',
            'on',
            'only',
            'onto',
            'out',
            'or',
            'per',
            'so',
            'than',
            'that',
            'the',
            'to',
            'until',
            'up',
            'upon',
            'v',
            'v.',
            'versus',
            'vs',
            'vs.',
            'via',
            'when',
            'with',
            'without',
            'yet'
        ]
    };
    }
    else {
        throw new Error(cc + ' is not a currently supported language code');
    }
}
