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

console.log("Fibonacci Sequence");
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(5)); // [0,1,1,2,3]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
console.log("------------------------------");
// Big-O ; O(n)
