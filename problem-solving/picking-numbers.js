function pickingNumbers(a) { 
    let freq = new Map();
    
    // Hitung frekuensi
    for (let x of a) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    let max_len = 0;

    // Loop lewat key (angka yang muncul)
    for (let [num, count] of freq.entries()) {
        // gabungkan dengan angka num + 1
        let curr = count + (freq.get(num + 1) || 0);
        if (curr > max_len) {
            max_len = curr;
        }
    }

    return max_len;
}

pickingNumbers([1, 2, 2, 3, 1, 2]); // Output: 5
console.log("--------------------------");
pickingNumbers([4, 6, 5, 3, 3, 1]); // Output: 3
