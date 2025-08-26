function pageCount(n, p) {

    let dpn = 0, blkg = 0;

    for (let i = 1; i <= n; i++) { 
        if (i==p) {
            break;
        } 
        if (i%2 != 0) { 
            dpn++
        }
    }

    if (n%2 == 0) { 
        for (let i = n; i >= 1; i--) { 
            if (i==p) {
                break;
            } 
            if (i%2 == 0) {
                blkg++;

            }
        }
    }else{ 
        for (let i = n; i >= 1; i--) {
            if (i==p) {
                break; 
            } 
            if (i%2 == 0) {
                blkg++;

            }
        } 
    }

 
    if (dpn < blkg) {
        return dpn
    }else{
        return blkg
    }
}
console.log(pageCount(6, 5));
console.log("=========================================")
console.log(pageCount(6, 2));
console.log("=========================================")
console.log(pageCount(5, 3));
console.log("=========================================")
console.log(pageCount(5, 4));