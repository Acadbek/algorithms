// function removeDuplicates(nums) {
//   let k = 0; // Index of the last unique element

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[k] = nums[i]; // Move the unique element to the next position
//       k++;
//     }
//   }

//   for (let i = k; i < nums.length; i++) {
//     nums[i] = '_';
//   }

//   return k;
// }

// const nums = [1, 1, 2]
// const k = removeDuplicates(nums);

// console.log(k); // Output: 5
// console.log(nums); // Output: [0, 1, 2, 3, 4, '_', '_', '_', '_', '_']


// let arr = [11, 22, 333, 44, 11111, 22222]

// console.log(arr[3]);