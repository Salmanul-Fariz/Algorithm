function binarySearch(target) {
  const array = [-5, 2, 4, 6, 10];

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) return middleIndex;

    if (target > array[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return 'Value Not Exist';
}

console.log('------------------------------');
console.log('Binary Search');
console.log('------------------------------');
console.log(binarySearch(10)); // 4
console.log(binarySearch(6)); // 3
console.log(binarySearch(20)); // -1
// Big-O = O(logn)
