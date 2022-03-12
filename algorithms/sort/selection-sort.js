// SELECTION SORT
// 1- Bosh ro'yxat yaratib olish.
// 2- Asl ro'yxatdagi eng katta qiymatni topib olish.

// SELECTION SORT = O(n^2) ya'ni ro'yxatda 10 element bo'lsa 100 ta operatsiya bajariladi.
//                                         100 ta el bo'lsa 1000 ta operatsiya bajariladi.

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let tepmArr = arr[i]
        // console.log(tepmArr)
        for (let j = i + 1; j < arr.length; j++) {
            if (tepmArr > arr[j]) {
                tepmArr = arr.length
            }
        }
        let index = arr.indexOf(tepmArr);
        let tempVal = arr[i];
        arr[i] = tepmArr;
        arr[index] = tempVal;
    }
}

selectionSort([4, 7, 2, 1, 9, 3, 1, 8, 3, 2, 87, 23])