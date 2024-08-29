//The 3 ways could not read the array inside the array,
//as they did not find any dulpicated in the large array
//OR they act with the smaller arrays as they are different arrays.

//Set
function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}
//Map Function
function hasDuplicates2(array) {
  const map = new Map();
  for (const item of array) {
    if (map.has(item)) {
      return true;
    }
    map.set(item, true);
  }
  return false;
}

//Array.prototype
function hasDuplicates3(array) {
  return array.some((item, index) => array.indexOf(item) !== index);
}

// Example usage
const array = [1, 2, 3, 4, 5, 1];
const array2 = [2, 4, [22, "test"], { a: 2 }, [22, "test"], "null"];
console.log(hasDuplicates(array)); // true
console.log(hasDuplicates(array2));

console.log(hasDuplicates2(array)); // true
console.log(hasDuplicates2(array2));

console.log(hasDuplicates3(array)); // true
console.log(hasDuplicates3(array2));
