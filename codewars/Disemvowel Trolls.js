//v-1
disemvowel = str => str.replace(/[aeiou]/gi,'');


//v-2
let vowels = 'eioau'
function disemvowel(str) {
  return str.split('')
  .filter((letter) =>!vowels
  .includes(letter.toLowerCase()))
  .join('')
} 

console.log(disemvowel('Goodbye World'))