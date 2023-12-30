// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.

function c(i) {
  console.log(i);
}

// best practice way
function pigIt(str) {
  return str.replace(/\b(\w)(\w*)\b/g, "$2$1ay")
}

// solution
function pigIt(str) {
  str = str.trim().split(/\s{1,}/);
  return str.map(val => {
    if (/^[A-Za-z]+$/.test(val)) {
      return `${val.slice(1)}${val.slice(0, 1)}ay`;
    }
    return val;
  }).join(' ');
}


c(pigIt('Pig latin is cool !')); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
