function getMoneySpent(keyboards, drives, b) {
	let count = new Map();
	for (var i = 0; i < keyboards.length; i++) {
		for (var j = 0; j < drives.length; j++) { 
			if (keyboards[i]+drives[j] <= b) {
				count.set(`${keyboards[i]}+${drives[j]}`,keyboards[i]+drives[j]);
			}
		}
	}
	if (count.size) {
		return Math.max(...count.values());
	}else{
		return -1;
	}
}
getMoneySpent([ 3, 1 ], [ 5, 2, 8 ], 10)
getMoneySpent([4], [5], 5)
