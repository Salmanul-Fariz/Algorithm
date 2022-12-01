///////////////////////////////
///// Fibonacci Sequence //////
///////////////////////////////

function fibonacci(n) {
  const feb = [0, 1];
  for (let i = 2; i < n; i++) {
    feb[i] = feb[i - 2] + feb[i - 1];
  }
  return feb;
}
console.log("------------------------------");
console.log("Fibonacci Sequence");
console.log("------------------------------");
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(5)); // [0,1,1,2,3]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
// Big-O = O(n)

///////////////////////////////
//// Factorial of a number ////
///////////////////////////////

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log("------------------------------");
console.log("Factorial of a Number");
console.log("------------------------------");
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
// Big-O = O(n)

///////////////////////////////
////// Prime or Non-Prime /////
///////////////////////////////

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log("------------------------------");
console.log("Prime or Non-Prime");
console.log("------------------------------");
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(5)); // true
// Big-O = O(sqrt(n))
