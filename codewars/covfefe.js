function covfefe(str) {
  const word = str.split(' ')
  if (word == '') return undefined;
  else if (word.includes('coverage')) {
    word.forEach((el) => {
      console.log(el = 'covfefe')
    })
  } else {
    word.push('covfefe')
    console.log(word.join(' '))
  }
}

covfefe("")

// coverage => covfefe
// "coverage coverage" => "covfefe covfefe"
// nothing => "nothing covfefe"
// "double space " => "double space  covfefe"
// covfefe => "covfefe covfefe"