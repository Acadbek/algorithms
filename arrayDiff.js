// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and 
// returns the result.

// It should remove all values from list a, 
// which are present in list b keeping their order.


function arrayDiff(a, b) {
  let trash = []
  let res = []

  if (a.length < 1) return [];
  else if (b.length < 1) {
    return a
  }
  else {
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < a.length; j++) {
      
      }
    }
    return res
  }
}


// arrayDiff([1,2],[1]) == [2]
// console.log(arrayDiff([1, 2, 2], [2]));
console.log(arrayDiff([1, 2, 3], [1, 2, 4, 5]));
