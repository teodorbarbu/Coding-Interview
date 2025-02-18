function isPalindrome1(str) {
  const formatedStr = removeNonAlphanumeric(str.toLowerCase());
  const reversedStr = reverseString(formatedStr);
  return formatedStr === reversedStr;

  function removeNonAlphanumeric(str) {
    let formatedStr = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (isAlphanumeric(char)) {
        formatedStr += char;
      }
    }
    return formatedStr;
  }

  function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
  }

  function reverseString(str) {
    let reversed = "";
    for (let char of str) {
      reversed = char + reversed;
    }
    return reversed;
  }
}

console.log(isPalindrome("lol"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));

function isPalindrome2(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
}

function isPalindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
