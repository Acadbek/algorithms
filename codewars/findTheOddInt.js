// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(numbers) {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return numbers[i];
    }
  }
};
// O(N) or O(N*log(N))
// source: stackoverflow

// function findOdd2(A) {
//   var count = {};
//   for (var i = 0; i < A.length; i++) {
//     var num = A[i];
//     if (count[num]) {
//       count[num] = count[num] + 1;
//     } else {
//       count[num] = 1;
//     }
//   }
//   var r = 0;
//   for (var prop in count) {
//     if (count[prop] % 2 != 0) {
//       r = prop;
//     }
//   }
//   return parseInt(r); // since object properies are strings
// }

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

// oTest([7], 7);
// doTest([0], 0);
// doTest([1, 1, 2], 2);
// doTest([0, 1, 0, 1, 0], 0);
// doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4);
// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
// doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
// doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
// doTest([10], 10);
// doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
// doTest([5,4,3,2,1,5,4,3,2,10,10], 1);


let obj = { 1: 'a' }

console.log(obj[0]);
