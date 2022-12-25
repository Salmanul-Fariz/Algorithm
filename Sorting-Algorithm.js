///////////////////////////////
///////  Bubble Sorting ///////
///////////////////////////////

function bubbleSorting(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
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

const array = [8, 20, -2, 4, -6];
bubbleSorting(array);
console.log(array);

// Big-O = O(n^2)
