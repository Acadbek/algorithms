function findLargest(arr) {
  return Math.min(...arr)
}

function sumOfMinimums(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += findLargest(element)
  });
  console.log(sum);
}

sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])

// [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]",
//          2               3                4             9
