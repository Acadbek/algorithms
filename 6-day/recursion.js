// // Recursion

// consolega 10 dan orqaga sanab ya`ni 10, 9, 8, 7... return qiladi,
// ifni ichida agar num dan katta bo'lsa func funksiyani yana qaytda ishlashi yozilgan.
// Funksiya ichida o`sha funksiyani qayta ishlatish


function func(num) {
    console.log(num)
    const newNum = num - 1
    if (num > 0) {
        func(newNum)
    }
}

func(10)