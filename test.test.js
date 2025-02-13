function findMaxNumber(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
console.log(
  findMaxNumber([99, 100, 33, 88, 44, 20, 1, 2, 4, 16, 9, 30, 66, 55, 77])
);

function findMaxNumber2(arr) {
  return Math.max(...arr);
}
console.log(findMaxNumber2([10, 91, 22, 12, 0, 92, 90]));
