// Note : In this i use Immediate Functions in JavaScript
function recursiveBinarySearch(arr, target) {
  return (function Search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      return Search(arr, target, 0, middleIndex - 1);
    } else {
      return Search(arr, target, middleIndex + 1, rightIndex);
    }
  })(arr, target, 0, arr.length - 1);
}
console.log('------------------------------');
console.log('Recursive Binary Search');
console.log('------------------------------');
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1
// Big-O = O(logn)
