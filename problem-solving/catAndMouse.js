function catAndMouse(x, y, z) {
	let ret = '';
	let a,b;
	a = z - x;
	b = z - y;

	if(Math.abs(a) > Math.abs(b)) {
		ret = 'Cat B';
	}else if(Math.abs(a) < Math.abs(b)) {
		ret = 'Cat A';
	}else{
		ret = 'Mouse C';
	}
	console.log(ret)
}

catAndMouse(1,2,3)
catAndMouse(1,3,2)