//function sumNoDuplicates(numList) {
//  let uniqueList = [...new Set(numList)]; // use Set to remove duplicates, then convert back to array
//  let sum = 0;
//  uniqueList.forEach((num) => (sum += num)); // sum up the unique elements
//  return sum;
//}
//
//console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0])); // 31

function sumWithoutDuplicates(list) {
  let uniqueList = [];
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (!uniqueList.includes(list[i])) {
      uniqueList.push(list[i]);
      sum += list[i];
    }
  }
  return sum;
}

let myList = [3, 4, 3, 6];
let sum = sumWithoutDuplicates(myList);
console.log(sum); // prints 10