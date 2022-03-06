'use strict';
//---------------------------- Algorithm ------------------------------

// Source: You-tube / sariqdev


// First algorithm is ==== BINARY SEARCH ===



// 1 - pastki chegarani (P=0), va tepa chegarani (T=n-1) deb belgilaymiz.
// 2 - bu chegaralarni musbat son ekanligini tekshirib olamiz ya'ni, foydalanuvchi manfiy son kiritib qo'yishi mumkin.
//     agar (p > t) bo'lsa qidirmaymiz.
// 3 - o'rta qiymatni topib olamiz. m = (p + t) / 2
// 4 - agar (A[m] = T), (m) ni qaytaramiz. Dastur to'xtaydi.
// 5 - agar (A[m] < T) bo'lsa, (P = m + 1) qilamiz, Endi pastki chegara  (m + 1) ga teng. Ya'ni (A) ni yarmini qoldirdik.
// 6-  agar (A[m] > T) bo'lsa, (T = m - 1) qilamiz, Endi tepa chegara (m - 1) ga teng.



// MATNLI TUSHUNCHA: Arrayni ichidan kerakli indexni topmoqchi bo'lsam, Arrayni teng ikkiga bo'laman (3-qadamda ko'rsatilgan) 
//         va kerakli indexni qidiraman, yo'q bo'lsa, index tepada yoki pastdaligini tekshirib olaman, qaysi tarafda bo'lsa o'sha tarafni 
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
