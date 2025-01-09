function removeDuplicates(arr) {

    const s = new Set();
    let idx = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!s.has(arr[i])) {
            s.add(arr[i]);
            console.log(idx++);

            arr[idx++] = arr[i];
        }
    }

    return idx;
}

// Driver code
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log(removeDuplicates(arr));


// let i = 1;
//     let j = 1;

//     while (j < nums.length) {
//         if (nums[i - 1] !== nums[j]) {
//             nums[i] = nums[j]
//             i++;
//         }

//         j++;
//     }

//     return i;