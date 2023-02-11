// function twoSum(nums, target) {
//   const numsObjs = {};

//   for (let i = 0; i < nums.length; i++) {
//     const currentValue = nums[i];

//     if (target - currentValue in numsObjs) {
//       return ([numsObjs[target - currentValue], i ])
//     }
//     numsObjs[nums[i]] = i;
//   }

//   return [-1, -1];
// }
// // console.log(value + arr[index + 1])

// twoSum([2, 7, 11, 15, 100, 100], 200)