function duplicateCount(text) {
  let obj = {};
  let counter = 0;
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (!obj[text[i]]) {
      obj[text[i]] = 1; // a = 1, b = 1, c = 1
    }
    else if (obj[text[i]] >= 1) {
      obj[text[i]] += 1; // c = 2
      counter++;
      console.log(text[i], 'else if');
    }
  }
  return counter;
}
console.log(duplicateCount('abcc'), 'res'); // 1

