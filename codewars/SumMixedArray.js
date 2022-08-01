// Given an array of integers as strings and numbers, return the 
// sum of the array values as if all were numbers.

// Return your answer as a number.

// ------------------------------------------------------------------------

// Uzbek:

//  Array beriladi ichida string ham number ham bor,
// array ichidagi sonlarni umumiy yigindisini number typeda qaytarishingiz kerak

//  array = [1, 2, '4', 7] = 14




function sumMix(x) {
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += +x[i]
  }
  return sum
}

sumMix([9, 3, '7', '3'])