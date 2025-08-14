function dayOfProgrammer(year) {
    let s = '';
    if (year < 1918) { 
        if (year % 4 === 0) {
            s = `12.09.${year}`;
        } else {
            s = `13.09.${year}`;
        }
    } else if (year === 1918) { 
        s = `26.09.${year}`;
    } else { 
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            s = `12.09.${year}`;
        } else {
            s = `13.09.${year}`;
        }
    }
    return s;
}

console.log(dayOfProgrammer(2100));
console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(1800));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1984));
