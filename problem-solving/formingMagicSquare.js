function formingMagicSquare(s) {
    let count = new Map();


    for (var i = 0; i < s.length; i++) {
        let x = 0, x2 = 0;
        let arr = [];
        for (var j = 0; j < s[i].length; j++) {
            x += s[i][j];
            x2 += s[j][i]; 
        }

        count.set("sum"+ i, x);
        count.set("sum"+ (i+3), x2);
    }

    console.log(count);
}
formingMagicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
]);
console.log("--------------------------")
formingMagicSquare([
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
]);
