function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(0));

console.log(reverseInt(5));
console.log(reverseInt(15));

console.log(reverseInt(-2359));
