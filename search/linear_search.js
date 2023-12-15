function linearSearch(target) {
  const array = [-5, 2, 10, 4, 6];

  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) return `${i} th Position`;
  }

  return 'Value Not exist';
}

console.log('------------------------------');
console.log('Linear Search');
console.log('------------------------------');
console.log(linearSearch(10)); // 2
console.log(linearSearch(6)); // 4
console.log(linearSearch(20)); // -1
// Big-O = O(n)
