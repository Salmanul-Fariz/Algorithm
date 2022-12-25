///////////////////////////////
///////  Bubble Sorting ///////
///////////////////////////////

function bubbleSorting(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp;

        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        /*
        Without temp;
  
        arr[i] = arr[i] + arr[i + 1];
        arr[i + 1] = arr[i] - arr[i + 1];
        arr[i] = arr[i] - arr[i + 1];
      
        */

        swapped = true;
      }
    }
  } while (swapped);
}
console.log('------------------------------');
console.log('Bubble Sorting');
console.log('------------------------------');

const bubbleArray = [8, 20, -2, 4, -6];
bubbleSorting(bubbleArray);
console.log(bubbleArray);

// Big-O = O(n^2)

///////////////////////////////
/////  Insertion Sorting //////
///////////////////////////////

function insertionSorting(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}
console.log('------------------------------');
console.log('Insertion Sorting');
console.log('------------------------------');

const insertionArray = [8, 20, -2, 4, -6];
insertionSorting(insertionArray);
console.log(insertionArray);

// Big-O = O(n^2)
