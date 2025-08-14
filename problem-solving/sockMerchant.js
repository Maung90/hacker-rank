function sockMerchant(n, ar) { 
    ar = ar.sort()
    let see = [];
    let count = 0, count2 = 0,  temp = 0, temp2 = 0;

    for (var i = 0; i < ar.length; i++) {
        for (var j = 0; j < ar.length; j++) {
            if (ar[i] === ar[j]) {  
                temp = ar[i]; 
                count++;
            }
        }
        if (count > 1) {
            console.log(count + " --- " + ar[i])
            count2++;
        }
        count = 0
    }
    // return see;
}

sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20])
console.log("------------------")
sockMerchant(3, [ 10, 20, 30])
// console.log(sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20]))
// console.log(sockMerchant(3, [ 10, 20, 30]))
