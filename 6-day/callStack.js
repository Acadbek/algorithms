// 'use strict';
// const p = document.querySelector('#text')
// const input = document.querySelector('#input')
// const btn = document.querySelector('#btn')

// function reverseFunc() {
//     btn.addEventListener('click', () => {
//         const revArr = []
//         const valueLength = input.value.length - 1
//         for (let i = valueLength; i >= 0; i--) {
//             revArr.push(input.value[i])
//         }
//         let revValue = revArr.join('')
//         let ourValue = input.value
//         console.log(revValue)
//         console.log(ourValue)

//         if (revValue == ourValue) {
//             console.log(true)
//         }
//         else {
//             console.log(false)
//         }
//     })
// }

// reverseFunc()


function reverX(x) {
    const array = []
    const value = x.toString().length - 1
    for (let i = value; i >= 0; i--) {
        array.push(x.toString()[i])
    }
    let revValue = array.join('')
    if (x == revValue) {
        return true
    } else {
        return false
    }
}

reverX(121)


// const isPalindrome = nums => {
//     let length = Math.floor(Math.log(nums) / Math.log(10) + 1);
//     while (length > 0) {
//         let last = Math.abs(nums − Math.floor(nums / 10) * 10);
//         let first = Math.floor(nums / Math.pow(10, length −1));
//         if (first != last) {
//             return false;
//         };
//         nums −= Math.pow(10, length−1) * first;
//         nums = Math.floor(nums / 10);
//         length −= 2;
//     };
//     return true;
// };
// isPalindrome