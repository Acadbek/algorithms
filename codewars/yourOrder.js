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

// function sortString(str) {
//   let arr = []

//   str.split(' ').forEach((el, i) => {
//     if (el[el.indexOf(el[i])]) {
//       c(el[el.indexOf(i)])
//       // 
//       arr.push(el)
//     }
//   })
//   c('-----------')
//   console.log('res: ', arr);
// }


function s(str) {
  let res = []
  let nums = []
  let strToArr = str.split(' ');

  strToArr.forEach((element, index) => {
    element.split('').forEach((l, i) => {
      if (regex.test(l)) {
        nums.push(l)
        nums = nums.sort()
        console.log(nums);
      }
    })
  });

}


s('is2 Thi1s T4est 3a')

function s(str) {
  const arr = str.split(' ')
  arr.map((item, i) => {
    item.split('').map((l) => {
      if (regex.test(l)) {
        let first;
        let temp;
        first = l

      }
    })
  })
}

function a(words) {
  let arr = words.split(' ')
  let r = []

  arr.forEach(word => {
    let x = word.split('')
    let num = x.find(el => parseInt(el))
    r.push([word, parseInt(num)])
  })

  r.sort((a, b) => a[1] - b[1]).map(x => x.splice(1, 1))

  console.log(r.join(''));
}

a('is2 Thi1s T4est 3a')
