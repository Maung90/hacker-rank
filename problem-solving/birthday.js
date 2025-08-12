// function birthday(s, d, m) { 
//     let g = 0;
//     for (var i = 0; i < s.length; i++) {
//         let x = 0, count = [];
//         for (var j = i; j < s.length; j++) {
//             x++;
//             count.push(s[j])
//             // console.log(s[j]);
//             if (x == m ) {
//                 if (d == sumArray(count)) {
//                     g++;
//                 }
//                 break;
//             }    
//         }
//     }
//     return g;
// }
// function sumArray(arr) {
//     return arr.reduce((sum, current) => sum + current, 0);
// }




// BEST PRACTICE COPILOT
function birthday(s, d, m) {
    let g = 0;
    let currentSum = 0;

    // Hitung jumlah elemen pertama dengan panjang m
    for (let i = 0; i < m; i++) {
        currentSum += s[i];
    }

    // Periksa apakah jumlah awal sama dengan d
    if (currentSum === d) {
        g++;
    }

    // Geser jendela ke kanan
    for (let i = m; i < s.length; i++) {
        currentSum += s[i] - s[i - m]; // Tambahkan elemen baru, kurangi elemen lama
        if (currentSum === d) {
            g++;
        }
    }

    return g;
}

console.log(birthday([1,1,1,1,1,1], 3, 2))
console.log("--------------------")
console.log(birthday([1,2,1,3,2], 3, 2))