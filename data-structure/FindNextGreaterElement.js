function FindNextGreaterElement(arr) {
    const result = [];
    const stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[i] >= stack[stack.length - 1]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result.unshift(-1);
        } else {
            result.unshift(stack[stack.length - 1]);
        }

        stack.push(arr[i]);
    }

    return result;
}

// Test case 1
const arr1 = [2, 7, 3, 5, 4, 6, 8];
const result1 = FindNextGreaterElement(arr1);
console.log(result1); // Output: [7, 8, 5, 6, 6, 8, -1]

// Test case 2
const arr2 = [5, 4, 3, 2, 1];
const result2 = FindNextGreaterElement(arr2);
console.log(result2); // Output: [-1, -1, -1, -1, -1]
