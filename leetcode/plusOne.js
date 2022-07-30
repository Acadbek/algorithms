// function plusOne(digits) {
//     if(digits.length > 1) {
//         let lastNum = digits.pop() + 1
//         digits.push(lastNum)
//         console.log(digits)   
//     }else{
//         let lastNum = digits.pop() + 1
//         digits.push(lastNum)
//         console.log(String(digits).split(''))
//     }
// }

function plusOne(nums) {
   // console.log(result)
   let result = +nums.join('') + 1
   console.log(result)
   if(String(result).length > 1) {
      console.log(result)
   }
}

let arr = [9, 9]
plusOne(arr)