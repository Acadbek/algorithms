function dub(str) {
  let obj = {}
  let count = 0
  str = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1
    } else if (obj[str[i]] === 1) {
      obj[str[i]] += 1
      count++
    }
  }

  return count
}


console.log(dub('aabbbc'));
