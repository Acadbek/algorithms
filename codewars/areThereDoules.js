function isInteger(n) {
  if (typeof n === 'number') {
    return n
  } else {
    return n.toLowerCase()
  }
}

function doubleCheck(str) {
  let arr = str.split('')

  for (let i = 0; i < arr.length - 1; i++) {
    if (isInteger(arr[i]) === isInteger(arr[i + 1])) {
      return true
    } else {
      return false
    }
  }
}

console.log(doubleCheck("Bace")) // false
//console.log();s false

console.log(doubleCheck("aabc"))
//returns true

console.log(doubleCheck("a 11 c d"))
//returns true

console.log(doubleCheck("AabBcC"))
//returns true

console.log(doubleCheck("a b  c"))
//returns true

console.log(doubleCheck("a b c d e f g h) i h k"))
//returns false

console.log(doubleCheck("2020"))
//returns false

console.log(doubleCheck("a!!@€£#$%^&*()_-+=}]{[|\"':;?/>.<,~"))
// returns false



