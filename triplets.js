function countTriplets(arr, r) {
  let count = 0;
  const database = {};

  for (let number of arr) {
    if (database[number]) {
      database[number]++;
    } else {
      database[number] = 1;
    }
  }

  for (let number of arr) {
    let mid = number * r;
    let last = mid * r;
    if (database[number] && database[mid] && database[last]) {
      count += database[number] * database[mid] * database[last];
    }
  }

  return count;
}
