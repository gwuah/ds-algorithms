function findA(string) {
  let aCount = 0;
  let chunks = string.split("");
  for (const element of chunks) {
    if (element === "a") {
      aCount += 1;
    }
  }
  return aCount;
}

function repeatedString(s, n) {
  let baseCountOfA = findA(s);
  const equalDivision = Math.floor(n / s.length);
  const remainderStringLength = n % s.length;

  const baseMatches = baseCountOfA * equalDivision;
  const remainder = findA(s.substring(0, remainderStringLength));

  return baseMatches + remainder;
}
