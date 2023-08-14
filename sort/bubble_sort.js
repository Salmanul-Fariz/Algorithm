function bubbleSorting(array) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapValues(array, i, i + 1);

        swapped = true;
      }
    }
  } while (swapped);
}

// For Swap the Values
function swapValues(array, value1Index, value2Index) {
  array[value1Index] = array[value1Index] + array[value2Index];
  array[value2Index] = array[value1Index] - array[value2Index];
  array[value1Index] = array[value1Index] - array[value2Index];
}

console.log('------------------------------');
console.log('Bubble Sorting');
console.log('------------------------------');

const array = [8, 20, -2, 4, -6];
bubbleSorting(array);

console.log(array);
// Output :- [-6, -2, 4, 8, 20]
// O(n2)
