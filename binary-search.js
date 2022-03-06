'use strict';
//---------------------------- Algorithm ------------------------------

// Source: You-tube / sariqdev


// First algorithm is ==== BINARY SEARCH ===



// 1 - boshiki chegarani (P=0), va oxri chegarani (T=n-1) deb belgilaymiz.
// 2 - bu chegaralarni musbat son ekanligini tekshirib olamiz ya'ni, foydalanuvchi manfiy son kiritib qo'yishi mumkin.
//     agar (p > t) bo'lsa qidirmaymiz.
// 3 - o'rta qiymatni topib olamiz. m = (p + t) / 2
// 4 - agar (A[m] = T), (m) ni qaytaramiz. Dastur to'xtaydi.
// 5 - agar (A[m] < T) bo'lsa, (P = m + 1) qilamiz, Endi boshiki chegara  (m + 1) ga teng. Ya'ni (A) ni yarmini qoldirdik.
// 6-  agar (A[m] > T) bo'lsa, (T = m - 1) qilamiz, Endi oxri chegara (m - 1) ga teng.



// MATNLI TUSHUNCHA: Arrayni ichidan kerakli indexni topmoqchi bo'lsam, Arrayni teng ikkiga bo'laman (3-qadamda ko'rsatilgan) 
//         va kerakli indexni qidiraman, yo'q bo'lsa, index oxrida yoki boshidaligini tekshirib olaman, qaysi tarafda bo'lsa o'sha tarafni 
//         qoldirib, qolgan yarmini tashlab yuboraman. va bu ish index topilguncha davom etadi.

// QO'SHIMCHA: let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ... 100] 
//             Linear search algaritmida A ichidan masalan eng oxirgi 100 soni topmoqchi bo'lsam 100 ta qadam bilan kelaman ya'ni O(n), 
//               12 ni o'ylagan bo'lsam 12 ta qadam bilgan kelaman.
//             Binary search algaritmida A ichidan masalan 100 ni o'ylagan bo'lsam 6 ta qadam bilgan kelaman. ya'ni O(log n)
//            
//             Linear searchda N ta elementdan iborat ro'yxat uchun, max-qadam soni N ga teng bo'ladi. 
//                    N = 2048, max-qadam soni (2048) ta qadamga teng.
//             Binary searchda N ta elementdan iborat ro'yxat uchun, max-qadam soni log2(n) ga teng bo'ladi. 
//                    N = 2048, max-qadam soni log2(2048) = (11) qadamga teng.


// ============================================================


// binary search function
const binarySearch = (arr, item) => {
    let boshi = 0
    let oxri = arr.length - 1
    while (boshi <= oxri) {
        let orta = Math.floor(boshi + oxri) / 2
        console.log(orta)
        if (arr[orta] === item) {
            console.log(orta, 'item o`rtadan topildi')
        } else if (arr[orta] < item) {
            boshi = orta + 1
            console.log(item, 'boshidan topildi')
        } else if (arr[orta] > item) {
            oxri = orta - 1
            console.log(item, 'item oxridan topildi')
        } else if (!item) {
            console.log(false)
        }
        break
    }
    console.log(false)
}

const list = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

binarySearch(list, 24)

// =============================================================

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`index topildi ${target}`)
            break
        }
    }
}

let array = [1, 19, 5, 11, 22, 55]
let oshaIndex = 1

linearSearch(array, oshaIndex)

// ============================================================

