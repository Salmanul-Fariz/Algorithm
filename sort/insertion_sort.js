function insertionSorting(array) {
  for (let i = 0; i < array.length; i++) {
    let valueToInsert = array[i];
    let index = i - 1;

    while (index >= 0 && valueToInsert < array[index]) {
      array[index + 1] = array[index];
      index--;
    }

    array[index + 1] = valueToInsert;
  }
}

console.log('------------------------------');
console.log('Insertion Sorting');
console.log('------------------------------');

const array = [8, 20, -2, 4, -6];
insertionSorting(array);

console.log(array);
// Output :- [-6, -2, 4, 8, 20]
// O(n2)
