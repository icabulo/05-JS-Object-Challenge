function myFunction(objX, objY) {
  return [Object.assign(objY, objX)]; //Object.assign(target, ...sources) Properties in the target object are overwritten by properties in the sources if they have the same key
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, { d: 4, b: 5, e: 6 }));
console.log(myFunction({ a: 1, b: 2, c: 3 }, { a: 4, d: 5, e: 6 }));
console.log(myFunction({ a: 1, b: 2, c: 3 }, { d: 4, b: 5, c: 6 }));
