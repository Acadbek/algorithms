// Bubble sort eng sodda tartiblash algosi
// SEKIN algo xisoblanadi
// tushunish uchun oson

// bu qanday ishlaydi?

// 1) arr dagi birinchi 2ta elementni solishtiramiz, 
//    agar 1- el 2- eldan kotta bolsa ornini alishtiramiz
// 2) xuddi shu jarayon davom etadi.

// Big O: O(n^2) agar arrda 5ta el bolsa 5ni kvsi 25ga teng, 
//              5ta elni sort qilish uchun 25ta operatsiya bajaradi (taxminiy qiymat)

// Bubble sort Implementation using Javascript




function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr, 'bblsort');
}
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
bblSort(arr);