function bonAppetit(bill, k, b) {
    let sum = 0;
    for (var i = 0; i < bill.length; i++) {
        if (i != k ) {
            sum += bill[i]
        }
    }
    if (b - sum/2 === 0) {
        console.log('Bon Appetit')
    }else{
        console.log(b - sum/2)
    }
}

bonAppetit([3,10,2,9], 1, 12)
bonAppetit([3,10,2,9], 1, 7)