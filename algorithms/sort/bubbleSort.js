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




let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    console.log(inputArr, 'bbl sort');
};

bubbleSort([24, 5, 5, 6, 7, 3, 2, 1, 4, 4, 34, 1, 1, 65, 6, 8, 34, 132, 1, 2, 24, 46])