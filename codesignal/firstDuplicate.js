// function solution(arr) {
//   let obj = {}
//   let res = []

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] === undefined) obj[arr[i]] = 1
//     else if (obj[arr[i]] === 1) res.push(arr[i])
//   }

//   console.log(Math.max(...res));
// }

// solution([2, 1, 3, 5, 3, 2])


// let obj = {}

// obj[3] = 2
// obj[3] = 2
// obj[3] = 2
// obj[2] = 2

// console.log(obj);

function solution(a) {
  const numCount = {};

  for (let i = 0; i < a.length; i++) {
    const num = a[i];

    if (numCount[num]) {
      
      if (numCount[num] === 2) {
        continue;
      }
    
      return num;
    }
    
    numCount[num] = 1;
  }

  // No duplicates found
  return -1;
}

// Example usage:
const a = [2, 1, 3, 5, 3, 2];
console.log(solution(a)); // Output: 3
