// Your task is to sort a given string. Each word in the string will 
// contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String
//  will only contain valid consecutive numbers.

// result

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function c(i) {
  console.log(i);
}

const regex = /\d+/;

function a(words) {
  let arr = words.split(' ')
  let r = []

  arr.forEach(word => {
    let x = word.split('')
    let num = x.find(el => parseInt(el))
    r.push([word, parseInt(num)])
  })

  r.sort((a, b) => a[1] - b[1]).map(x => x.splice(1, 1))

  return r.join('')
}

a('is2 Thi1s T4est 3a')

// best practise

// return words.split(' ').sort(function(a, b){
//   return a.match(/\d/) - b.match(/\d/);
// }).join(' ');
