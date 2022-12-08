function myFunction(obj) {
  //using reduce() with objects: https://stackoverflow.com/questions/15748656/javascript-reduce-on-object#15748853
  const result = Object.keys(obj).reduce(
    (accumulator, key) => accumulator + obj[key],
    0
  );
  return result;
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
console.log(myFunction({ w: 15, x: 22, y: 13 }));
