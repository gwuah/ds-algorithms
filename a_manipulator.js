function arrayManipulation(array_size, operations) {
  const storage = {};
  let biggestNumber = 0;

  function insertValue(key, value) {
    if (!storage[key]) {
      storage[key] = value;
    } else {
      storage[key] = storage[low] + value;
    }
  }

  for (const operation of operations) {
    const low = operation[0];
    const maxPlus1 = operation[2] + 1;

    insertValue(low, operation[2]);
    insertValue(maxPlus1, operation[2]);
  }

  const keys = Object.keys(storage);
  let startPoint = 0;
  for (let key of keys) {
    startPoint += storage(key);

    if (startPoint > biggestNumber) {
      biggestNumber = startPoint;
    }
  }

  return biggestNumber;
}
