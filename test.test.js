function isPalindrome(str) {
  let reverse = "";
  for (let char of str) {
    reverse = char + reverse;
  }
  if (str === reverse) {
    return true;
  } else {
    return false;
  }
  //return reverse;
  //return str.split("").reduce((rev, char) => char + rev, "");
}

console.log(isPalindrome("lol"));
