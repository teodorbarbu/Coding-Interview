function removeDuplicates1(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
console.log(removeDuplicates(["apple", "banana", "orange", "banana", "kiwi"]));
console.log(removeDuplicates([true, true, false, true, false]));
