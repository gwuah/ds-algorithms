function hourglassSum(arr) {
  for (let row = 0; row <= 3; row++) {
    for (let col = 0; col <= 3; col++) {
      let sum = 0;

      c = [arr[row][col], arr[row][col + 1], arr[row][col + 2]];
      d = [undefined, arr[row + 1][col + 1], undefined];
      e = [arr[row + 2][col], arr[row + 2][col + 1], arr[row + 2][col + 2]];

      console.log(c);
      console.log(d);

      console.log(e);

      hourglasses.push(sum);
    }
  }
}

function twoFrom3(arr) {
  for (let row = 0; row <= 2; row++) {
    for (let col = 0; col <= 2; col++) {
      c = [arr[row][col], arr[row][col + 1]];
      d = [arr[row + 1][col], arr[row + 1][col + 1]];

      console.log([c, d]);
    }
  }
}
