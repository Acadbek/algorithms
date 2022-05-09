function solution(nums) {
    if (nums == null || nums == 0) {
        return [];
    }

    let pivot = nums[0];

    let left = [];
    let right = [];

    for (let i = 1; i < nums.length; i++) {
        nums[i] < pivot ? left.push(nums[i]) : right.push(nums[i]);
    }

    return solution(left).concat(pivot, solution(right));
};

let unsorted = [86,55,-22,-63,-47,-23,-23,98, -111,-36,-61,-29,97,-1,35,68,-54,-49,14,-41,15,-39,-77,-51,-4,-16,29,48,70,-13,-97,-62,-27,39];
let sorted = solution(unsorted);
console.log(sorted);