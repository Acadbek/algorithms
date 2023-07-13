/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// var mergeTwoLists = function (list1, list2) {
//     let array = []
//     let pivot = list1[0]
//     let left = []
//     let right = []
//     for (let i = 0; i < list1.length; i++) {
//         list1[i] < pivot ? left.push(array[i]) : right.push(array[i]);
//     }

//     console.log(mergeTwoLists(left).concat(pivot, mergeTwoLists(right)))
// };

let list1 = [1, 4, 2, 3, 1, 5, 2, 1]
let list2 = [12, 74, 6, 3, 6, 4, 3, 4]
console.log(list1.concat(list2).sort())

class CustomArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    // getting the element of the array using the index
    access(index) {
        return this.data[index]
    }
}

const p = new CustomArray()
p.data = {
    0: 1,
    1: 4,
    2: 2,
    3: 3,
    4: 1,
    5: 5,
    6: 2,
    7: 1
}
p.length = 8