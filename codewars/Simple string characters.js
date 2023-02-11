// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

function solve(s) {
  let upperArr = [];
  let lowerArr = [];
  let numArr = [];
  let charArr = [];

  s.split('').filter((letter) => {
    if (letter.match(/^[^a-zA-Z0-9]+$/)) {
      charArr.push(letter)
    }
    else if (letter.toUpperCase() === letter && !letter.match(/\d/g)) {
      upperArr.push(letter)
    } else if (letter.toLowerCase() === letter && !letter.match(/\d/g)) {
      lowerArr.push(letter)
    } else {
      numArr.push(letter)
    }
  });
  console.log([upperArr.length, lowerArr.length, numArr.length, charArr.length]);
  return [upperArr.length, lowerArr.length, numArr.length, charArr.length]
}

let word = "RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD" // Output: [15, 8, 6, 9]


solve(word)