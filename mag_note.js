function checkMagazine(m, n) {
  const dict = {};
  for (let i = 0; i < m.length; i++) {
    if (dict[m[i]]) {
      dict[m[i]] += 1;
    } else {
      dict[m[i]] = 1;
    }
  }

  for (let i = 0; i < n.length; i++) {
    if (!dict[n[i]] || dict[n[i]] < 1) {
      console.log("No");
      return;
    } else {
      dict[n[i]] -= 1;
    }
  }

  console.log("Yes");
}
