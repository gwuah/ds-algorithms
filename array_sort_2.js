// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     rightNumber = i + 1;
//     currentNumber = arr[i];
//     if (currentNumber === rightNumber) {
//       // do nothing
//     } else {
//       for (let j = rightNumber; j < arr.length; j++) {
//         if (currentNumber === j + 1) {
//           poppedJ = array[j];
//           array[j] = currentNumber;
//           array[i] = poppedJ;
//           currentNumber = poppedJ;
//           console.log(arr);
//         }
//       }
//     }
//   }
// }

// function sort(arr) {
//   let swaps = 0;
//   for (let i = 0; i < arr.length; i++) {
//     rightNumber = i + 1;
//     currentNumber = arr[i];
//     if (!currentNumber === rightNumber) {
//       for (let j = rightNumber; j < arr.length; j++) {
//         if (currentNumber === j + 1) {
//           poppedJ = array[j];
//           array[j] = currentNumber;
//           array[i] = poppedJ;
//           currentNumber = poppedJ;
//           swaps++;
//           console.log(arr);
//         }
//       }
//     }
//   }

//   return swaps;
// }

// the code below works btw
function minimumSwaps(arr) {
  let rightNumber = undefined,
    currentNumber = undefined,
    swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    rightNumber = i + 1;
    currentNumber = arr[i];
    if (currentNumber !== rightNumber) {
      for (let j = rightNumber; j < arr.length; j++) {
        if (currentNumber === j + 1) {
          let poppedJ = arr[j];
          arr[j] = currentNumber;
          arr[i] = poppedJ;
          currentNumber = poppedJ;
          swaps++;
        } else if (rightNumber === arr[j]) {
          let poppedI = arr[i];
          arr[i] = arr[j];
          arr[j] = poppedI;
          swaps++;
          break;
        }
      }
    }
  }
}
