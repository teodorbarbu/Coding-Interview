function chunk1(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

function chunk2(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

function chunk3(arr, size) {
  const res = [];
  let subarr = [];
  for (let i = 0; i < arr.length; i++) {
    subarr.push(arr[i]);
    if (subarr.length === size) {
      res.push(subarr);
      subarr = [];
    }
  }
  if (subarr.length) {
    res.push(subarr);
  }
  return res;
}

function chunk(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
console.log(chunk([1, 2, 3], 1));
// [[1], [2], [3]]
console.log(chunk([1, 2, 3, 4, 5], 3));
// [[1, 2, 3], [4, 5]]

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
//([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]])
