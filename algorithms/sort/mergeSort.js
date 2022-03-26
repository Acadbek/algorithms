// Merge sort tez algo xisoblanadi.
// (Divide and Conquer) usuli yordamida ishlaydigan tartiblash algosi.
// ishlash tartibi royxatni 2ga bolib, 
//  ikki tarafni alohida tartiblab jamlash asosida ishlaydi.

// quicksort bn merge sortni silishtirsak BigO tarafdan birxil (O(nlog2n))
//   yani bajaradigan operatsiyalar soni bir xil lekin bajarilish vaqti 
//   xarxil. (quicksort kamroq vaqt sarflaydi).


function mergeSort(array) {
    let start = 0
    let end = array.length - 1
    let mid = Math.floor((start + end) / 2)
    console.log(mid, 'merge-sort')
}

mergeSort([1, 5, 1, 3, 6, 8, 3, 1, 3, 5, 6, 7, 3, 23, 56, 778, 12, 34, 78, 13, 234, 56])

// tugallanmagan.