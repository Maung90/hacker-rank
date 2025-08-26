function countingValleys(steps, path) { 
	let valley = 0, down = 0, temp = 0;  
	for (var i = 0; i < steps; i++) {
		if (path.charAt(i) == 'D') { 
			down--; 
		}else{ 
			down++;
			if (temp == -1 && down == 0) {
				valley++;
			}
		}
		// console.log(down + " ::::::::: " + valley)
		temp = down
	}  
	return valley;
}
countingValleys(8,"UDDDUDUU") // 1
console.log("------------------------------------")
countingValleys(12,"DDUUDDUDUUUD") // 2
console.log("------------------------------------")
countingValleys(10,"UUUUDDDDDD") // 0
// console.log("------------------------------------")
// countingValleys(6,"DDUUUD") // 1
// console.log("------------------------------------")
// countingValleys(12,"DDDUUUUDDUUU") // 2
// console.log("------------------------------------")
