function isPangram(string) {
  const startTime = performance.now();

  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz') // alfabitdagi hamma xarflarni set qilish

  string = string.toLowerCase().replace(/[^a-z]/g, '') // input ichidan faqat a-z gacha xarflarni qoldirish & kichik xarfga otkazish

  for (const letter of string) { // inputni xar bir xarfini ushlash
    alphabet.delete(letter) // alfabitda bor bolgan inputni xarflarini ochirib yuborish

    if (alphabet.size === 0) { // tekshirish: agar inputni ichida alfabitdagi hamma xarf bor bolsa demak size 0 ga teng boladi
      console.log(true);
    }
  }
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log("Execution time:", executionTime, "milliseconds");

  return false; // inputda biror xarf yetishmasa alphabet ozgaruvchisida delete bolmay qolib ketadi va false beradi
}

// isPangram('The quick brown fox jumps over the lazy dog');

// abcdefghijklmnopqrstuvwxyz


// Maybe best practice!

function isPangram(string) {
  const start = performance.now()

  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

  console.log(alphabetList.every((letter) => string.toLowerCase().includes(letter)));
  const end = performance.now()
  const time = end - start
  console.log(time);
}

isPangram('The quick brown fox jumps over the lazy dog');
