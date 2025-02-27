import assert from "node:assert";

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) return middle;
    else if (arr[middle] > val) right = middle - 1;
    else left = middle + 1;
  }

  return -1;
}

const array = [1, 5, 8, 10, 24, 60, 580, 1235];

assert.deepStrictEqual(binarySearch(array, 8), 2);
assert.deepStrictEqual(binarySearch(array, 60), 5);
assert.deepStrictEqual(binarySearch(array, 1235), array.length - 1);
assert.deepStrictEqual(binarySearch(array, 125125), -1);
