function shiftArray(arr, shifts) {
  let index = 0;
  while (index < shifts) {
    const value = arr.pop();
    arr.push(value);
    index++;
  }

  return arr;
}
