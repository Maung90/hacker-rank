function breakingRecords(scores) { 
    let lowest = scores[0], highest = scores[0];
    let recLow = 0, recHigh = 0;

    for (var i = 0; i <= scores.length - 1; i++) {
        if (lowest < scores[i]) {
            lowest = scores[i];
            recLow++;
        }
        if (highest > scores[i]) {
            highest = scores[i];
            recHigh++;
        }
    }
    return [recHigh, recLow ];

}

scores = [3,4,21,36,10,28,35,5,24,42];

console.log(breakingRecords(scores)); 