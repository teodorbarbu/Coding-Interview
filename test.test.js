function intersectionArray1(arr1, arr2) {
  const intersectionArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersectionArr.push(arr1[i]);
    }
  }
  return intersectionArr;
}

function intersectionArray(arr1, arr2) {
  const set = new Set(arr1);
  const intersectionArr = [];
  for (let num of arr2) {
    if (set.has(num)) {
      intersectionArr.push(num);
    }
  }
  return intersectionArr;
}

console.log(intersectionArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); //[ 3, 4, 5 ]

console.log(intersectionArray([10, 20, 30], [30, 40, 50])); //[ 30 ]

console.log(intersectionArray([1, 2, 3], [4, 5, 6])); //[]
