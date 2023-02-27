function solve(s) {
  s.split('')
  let upperLetterCount = 0
  let lowerLetterCount = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) upperLetterCount++
    else lowerLetterCount++
  }
  if (upperLetterCount <= lowerLetterCount) return s.toLowerCase()
  else return s.toUpperCase()
}

solve('CODe')

// solve("coDe") = "code"
// solve("CODe") = "CODE"
// solve("coDE") = "code"