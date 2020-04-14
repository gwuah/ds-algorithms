// function manipulator(n, queries) {
//   let maximumNumber = 0;
//   let database = {};

//   for (let i = 1; i < n + 1; i++) {
//     database[i] = 0;
//   }

//   for (let i = 0; i < queries.length; i++) {
//     let config = queries[i];
//     let min = config[0],
//       max = config[1],
//       inc = config[2];

//     for (let j = min; j < max + 1; j++) {
//       let previousValue = database[j];
//       const newValue = previousValue + inc;
//       database[j] = newValue;

//       if (newValue > maximumNumber) {
//         maximumNumber = newValue;
//       }
//     }
//   }

//   console.log(database);
// }

function manipulator(n, queries) {
  let maximumNumber = 0;
  let database = {};

  for (let i = 0; i < queries.length; i++) {
    let config = queries[i];
    let min = config[0],
      max = config[1],
      inc = config[2];

    for (let j = min; j < max + 1; j++) {
      console.log(J);

      let newValue;
      if (!database[j]) {
        database[j] = inc;
        newValue = inc;
      } else {
        newValue = database[j] + inc;
        database[j] = newValue;
      }

      if (newValue > maximumNumber) {
        maximumNumber = newValue;
      }
    }
  }

  console.log(database);
  return maximumNumber;
}
