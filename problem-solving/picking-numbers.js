function pickingNumbers(a) { 
	let map = new Map();
	a = a.sort()
	let count = 0;
	let npk = a[0]; //nilai paling kecil

	for (var i = 0; i < a.length; i++) {
		for (var j = i; j < a.length; j++) {
			// console.log(a[j])
			if (npk == a[i] || a[i] + 1 == a[j]) {
				console.log(a[j])
			}
		}
		console.log("---------------")
	}
	// console.log(map)

}

// pickingNumbers([1, 2, 2, 3, 1, 2]) // 5
// console.log("--------------------------")
pickingNumbers([4, 6, 5, 3, 3, 1]) // 3