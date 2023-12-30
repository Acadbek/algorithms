// Exclamation marks series #2: Remove all exclamatio?
//  marks from the end of sentence


// Remove all exclamation marks from the end of sentence.


// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
// let newW = str + lastWord.match(/[A-Za-z]/g).join('')

// best practice
// const remove = s => s.replace(/!+$/, '');


// my solution
function removeExclamationMarkOnlyLast(str) {
  let lastIndex = str.length - 1;

  while (lastIndex >= 0 && str[lastIndex] === '!') {
    lastIndex--;
  }

  if (lastIndex < str.length - 1) {
    str = str.substring(0, lastIndex + 1);
  }

  return str;
}


function remove(string) {
  let arr = string.split(' ')
  if (arr.length > 1) {
    let lastItem = arr.pop()
    return arr.join(' ') + ' ' + lastItem.match(/[A-Za-z]/g).join('');
  } else {
    return removeExclamationMarkOnlyLast(string)
  }
}

// some way
// while (s[s.length - 1] === '!') {
//   s = s.slice(0, -1);
// }
// return s;



console.log(remove('wds tpoei pgtcdb lqutuj wmhrtah!!!'));
