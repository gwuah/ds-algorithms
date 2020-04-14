c = [0, 0, 0, 0, 1, 0];

function nextJump(position, arr) {
  if (arr[position + 2] === 0) {
    return position + 2;
  } else if (arr[position + 1] === 0) {
    return position + 1;
  }
}

function cloudMan(arr) {
  const paths = [];
  const indexToSkip = {};

  for (let index = 0; index < arr.length; index++) {
    if (index === 0) {
      paths.push(0);
    }

    if (!indexToSkip[index]) {
      const nextPosition = nextJump(index, arr);
      indexToSkip[nextPosition - 1] = true;
      paths.push(nextPosition);
    }
  }

  return paths;
}

cloudMan(c);
