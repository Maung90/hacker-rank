function kangaroo(x1, v1, x2, v2) { 
    let res = 0, res2 = 0, bool = true, test = '';
    if (x2 > x1 && v2 > v1) {
        test = 'NO'
    }else{
        if((x2 - x1) % (v1 - v2)==0){
            test = 'YES';
        }else{
            test = 'NO';
        }
    }
    return test;
}

// console.log(kangaroo(0,3,4,2))

// console.log(kangaroo(0,2,5,3))

console.log(kangaroo(63,8,94,3))

// console.log(kangaroo(0,2,5,1))

// console.log(kangaroo(0,3,4,2))

// console.log(kangaroo(2,1,1,2))