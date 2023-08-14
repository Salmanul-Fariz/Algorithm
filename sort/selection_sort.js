function selectionSorting(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        swapValues(array, i, j);
      }
    }
  }
}

// For Swap the Values
function swapValues(array, value1Index, value2Index) {
  array[value1Index] = array[value1Index] + array[value2Index];
  array[value2Index] = array[value1Index] - array[value2Index];
  array[value1Index] = array[value1Index] - array[value2Index];
}

console.log('------------------------------');
console.log('Selection Sorting');
console.log('------------------------------');

const array = [8, 20, -2, 4, -6];
selectionSorting(array);

console.log(array);
// Output :- [-6, -2, 4, 8, 20]
