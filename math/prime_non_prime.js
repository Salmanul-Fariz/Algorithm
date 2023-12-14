function isPrime(val) {
  let isPrimeBol = true;

  if (val > 1) {
    for (let i = 2; i < val; i++) {
      if (val % i === 0) {
        isPrimeBol = false;
        break;
      }
    }
  } else {
    isPrimeBol = false;
  }

  return isPrimeBol;
}

console.log('------------------------------');
console.log('Prime or Non-Prime');
console.log('------------------------------');
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(5)); // true
// Big-O = O(n)
