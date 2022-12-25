///////////////////////////////
//////// Linear Search ////////
///////////////////////////////

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
console.log('------------------------------');
console.log('Linear Search');
console.log('------------------------------');
console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1
// Big-O = O(n)

///////////////////////////////
//////// Binary Search ////////
///////////////////////////////

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}
console.log('------------------------------');
console.log('Binary Search');
console.log('------------------------------');
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
// Big-O = O(logn)

///////////////////////////////
/// Recursive Binary Search ///
///////////////////////////////

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
