function recursiveFbonacci(n) {
  if (n < 2) return n;

  return recursiveFbonacci(n - 1) + recursiveFbonacci(n - 2);
}
console.log('------------------------------');
console.log('Recursive Fibonacci Sequence');
console.log('------------------------------');
console.log(recursiveFbonacci(0)); // 0
console.log(recursiveFbonacci(1)); // 1
console.log(recursiveFbonacci(6)); // 8
// Big-O = O(n^2) - recursive fibonacci is not good
