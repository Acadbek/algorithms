// Write a function that takes in a string of one or more
// words, and returns the same string, but with all words that have
// five or more letters reversed(Just like the name of this Kata).Strings
// passed in will consist of only letters and spaces.Spaces will be included only
// when more than one word is present.


// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function reverseStr(str) {
  return str.split('').reverse().join('')
}

function spinWords(string) {
  let arr = string.split(' ')

  return arr.map(w => {
    return w.length >= 5 ? reverseStr(w) : w
  }).join(' ')
}

console.log(spinWords('Hey fellow warriors'));
