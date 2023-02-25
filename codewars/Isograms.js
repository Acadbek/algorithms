function isIsogram(str) {
  if (str.trim() === '') {
    return ''
  } else {
    let array = str.toLowerCase().split('')
    for (let i = 0; i < array.length; i++) {
      console.log(
        str.toLowerCase().charAt(i) === array[i]
      );
    }
  }
}

isIsogram('Dermatoglyphics')
// moOse  