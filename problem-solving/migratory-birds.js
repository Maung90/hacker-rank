function migratoryBirds(arr) {
    arr = arr.sort().reverse()
    let count = 0, count2 = 0,  temp = 0, temp2 = 0;
    for (var i = 0; i < arr.length; i++) { 
        for (var j = i; j < arr.length; j++) {  
            if (arr[i] === arr[j]) { 
                temp = arr[i]; 
                count++;
            }
        } 
        if (count >= count2) {
            count2 = count;
            temp2=temp;
        }
        count = 0;
    }
    return temp2;

}
// migratoryBirds([1,2,3,4,5,4,3,2,1,3,4])
console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]));