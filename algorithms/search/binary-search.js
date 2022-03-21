'use strict';
//---------------------------- Algorithm ------------------------------

// Source: You-tube / sariqdev


// First algorithm is ==== BINARY SEARCH ====



// 1 - boshidagi chegarani (P=0), va oxri chegarani (T=n-1) deb belgilaymiz.
// 2 - bu chegaralarni musbat son ekanligini tekshirib olamiz ya'ni, foydalanuvchi manfiy son kiritib qo'yishi mumkin.
//     agar (p > t) bo'lsa qidirmaymiz.
// 3 - o'rta qiymatni topib olamiz. m = (p + t) / 2
// 4 - agar (A[m] = T), (m) ni qaytaramiz. Dastur to'xtaydi.
// 5 - agar (A[m] < T) bo'lsa, (P = m + 1) qilamiz, Endi boshidagi chegara  (m + 1) ga teng. Ya'ni (A) ni yarmini qoldirdik.
// 6 -  agar (A[m] > T) bo'lsa, (T = m - 1) qilamiz, Endi oxirgi chegara (m - 1) ga teng.



// MATNLI TUSHUNCHA: Arrayni ichidan kerakli indexni topmoqchi bo'lsam, Arrayni teng ikkiga bo'laman (3-qadamda ko'rsatilgan) 
//         va kerakli indexni qidiraman, yo'q bo'lsa, index oxrida yoki boshidaligini tekshirib olaman, qaysi tarafda bo'lsa o'sha tarafni 
//         qoldirib, qolgan yarmini tashlab yuboraman. va bu ish index topilguncha davom etadi.

// QO'SHIMCHA: let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ... 100] 
//             Linear search algaritmida A ichidan eng oxirgi 100 soni topmoqchi bo'lsam 100 ta qadam bilan kelaman ya'ni O(n), 
//               12 ni o'ylagan bo'lsam 12 ta qadam bilgan kelaman.
//             Binary search algaritmida A ichidan 100 ni o'ylagan bo'lsam 6 ta qadam bilan kelaman. ya'ni  O log2(n)
//            
//             Linear searchda N ta elementdan iborat ro'yxat uchun, max-qadam soni N ga teng bo'ladi. 
//                    N = 2048, max-qadam soni (2048) ta qadamga teng.
//             Binary searchda N ta elementdan iborat ro'yxat uchun, max-qadam soni log2(n) ga teng bo'ladi. 
//                    N = 2048, max-qadam soni log2(2048) = (11) qadamga teng.


// ============================================================

function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;
    if (start > end) {
        return false;
    }
    else {
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);

            if (sortedArray[middle] === key) {
                console.log(middle, 'mid')
            } else if (sortedArray[middle] < key) {
                start = middle + 1;
                console.log(key, 'end')
            } else {
                end = middle - 1;
                console.log(key, 'start')
            }
            break;
        }
    }
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 11)

// return 8 end