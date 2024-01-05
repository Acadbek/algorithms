function isPangram(string) {
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz') // alfabitdagi hamma xarflarni set qilish

  string = string.toLowerCase().replace(/[^a-z]/g, '') // input ichidan faqat a-z gacha xarflarni qoldirish & kichik xarfga otkazish

  for (const letter of string) { // inputni xar bir xarfini ushlash
    alphabet.delete(letter) // alfabitda bor bolgan inputni xarflarini ochirib yuborish

    if (alphabet.size === 0) { // tekshirish: agar inputni ichida alfabitdagi hamma xarf bor bolsa demak size 0 ga teng boladi
      return true
    }
  }
  return false // inputda biror xarf yetishmasa alphabet ozgaruvchisida delete bolmay qolib ketadi va false beradi
}

isPangram('The quick brown fox jumps over the lazy dog')

// abcdefghijklmnopqrstuvwxyz
