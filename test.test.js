function findMissingLetter(arr) {
  const alphabeth = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabeth.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabeth[startIndex + i]) {
      return alphabeth[startIndex + i];
    }
  }
  return [];
}

console.log(findMissingLetter("a", "b", "c", "d", "f"));
