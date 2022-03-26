function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

let unsorted = [456, 23, 45, 16, 37, 3, 99, 22, 100, 0, 3, 3, 5, 6, 2, 34, 45, 6, 45, 234];
let sorted = quicksort(unsorted);
console.log('quicksort', sorted);