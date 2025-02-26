function displayLikes(names) {
  const length = names.length;
  if (length === 0) {
    return "no one likes this";
  } else if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]}, and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]}, and ${length - 2} others like this`;
  }
}

console.log(displayLikes([])); //'no one likes this'
console.log(displayLikes(["Peter"])); //'Peter likes this'
console.log(displayLikes(["Jacob", "Alex"])); //'Jacob and Alex like this'
console.log(displayLikes(["Max", "John", "Mark"])); //'Max, John and Mark like this'

console.log(displayLikes(["Alex", "Jacob", "Mark", "Max"]));
//'Alex, Jacob and 2 others like this'
console.log(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"]));
//'Alex, Jacob and 3 others like this'
