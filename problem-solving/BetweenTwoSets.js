function getTotalX(a, b) {
    // Helper function to find GCD (Greatest Common Divisor)
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

    // Helper function to find LCM (Least Common Multiple)
    const lcm = (x, y) => (x * y) / gcd(x, y);

    // Find LCM of array `a`
    let lcmA = a.reduce((acc, val) => lcm(acc, val));

    // Find GCD of array `b`
    let gcdB = b.reduce((acc, val) => gcd(acc, val));

    // Count numbers between the two sets
    let count = 0;
    for (let i = lcmA; i <= gcdB; i += lcmA) {
        if (gcdB % i === 0) {
            count++;
        }
    }

    return count;
}

// Example usage
const a = [2, 4];
const b = [16, 32, 96];
console.log(getTotalX(a,b)); // Output: 3