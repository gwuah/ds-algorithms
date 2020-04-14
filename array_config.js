function validateConfig(q) {
  let index = 0;
  let moves = 0;
  let zeros = 0;

  while (index < q.length) {
    const checkSum = index - q[index] + 1;
    // console.log(checkSum);
    if (checkSum <= -3) {
      return "Too chaotic";
    }

    if (checkSum > 0) {
      moves += checkSum;
    } else if (checkSum == 0) {
      zeros++;
    }

    index++;
  }

  return zeros > 2 ? moves + 1 : moves;
}
