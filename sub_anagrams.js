function isAnagram(str1, str2) {
  let sorted1 = str1.split("").sort();
  let sorted2 = str2.split("").sort();

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return false;
  }
  return true;
}

function getAllSubstrings(str) {
  let i,
    j,
    result = [];

  console.log("here init");

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}

function sherlockAndAnagrams(string) {
  const charMap = {};
  let count = 0;
  let stringLength = string.length;
  let negatedLength = -stringLength;

  for (let i = 0; i < stringLength; i++) {
    let char = string[i];

    if (!charMap[char]) {
      negatedLength++;
      charMap[char] = true;
    }
  }

  if (negatedLength >= 0) {
    return 0;
  }

  const subStrings = getAllSubstrings(string);

  console.log("here1");

  for (let i = 0; i < subStrings.length; i++) {
    let mainString = subStrings[i];
    for (let j = i + 1; j < subStrings.length; j++) {
      console.log(subStrings);
      let compareBy = subStrings[j];

      if (mainString.length !== compareBy.length) {
        continue;
      } else if (isAnagram(mainString, compareBy)) {
        count++;
      }
    }
  }

  return count;
}
