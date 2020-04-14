function mergeSort(arr) {
  const length = arr.length;

  if (arr.length < 2) {
    return arr;
  }

  const midPoint = Math.floor(length / 2);
  const firstHalf = arr.slice(0, midPoint);
  const secondHalf = arr.slice(midPoint);

  const a = mergeSort(firstHalf);
  const b = mergeSort(secondHalf);

  return stich(a, b);
}

function stich(a, b) {
  let results = [];

  while (a.length > 0 && b.length > 0) {
    if (a[0] > b[0]) {
      results.push(b[0]);
      b.shift();
    } else {
      results.push(a[0]);
      a.shift();
    }
  }

  return results;
}
