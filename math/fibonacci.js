function fibonacci(val) {
  const result = [0, 1];

  for (let i = 2; i < val; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return result;
}

console.log('------------------------------');
console.log('Fibonacci Sequence');
console.log('------------------------------');
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(5)); // [0,1,1,2,3]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
// Big-O = O(n)
