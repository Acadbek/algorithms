// function countSheeps(arrayOfSheep) {
//   arrayOfSheep.forEach(element => {
//     if(element === true) {
//       let array = []
//       array.push(element)
//       console.log(array)
//     }
//   });
// }

// function countSheeps(arrayOfSheep) {
//   let n = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] === true)  n = n + 1
//     return n
//   }
// }

// function countSheeps(arrayOfSheep) {
//   let counter = 0
//   arrayOfSheep.forEach(sheep => {
//       if(sheep) counter++
//   })
//   console.log(counter)
// }

function countSheeps(arrayOfSheep) {
  console.log(arrayOfSheep.filter(Boolean).length)
}

let arr = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]
countSheeps(arr)

// console.log(arr)