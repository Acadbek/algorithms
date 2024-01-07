
let word1 = ' Hello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my KataHello there thanks for trying my Kata'
let word = '    Hello asadBEK    World'



function generateHashtag(str) {
  if (str.trim() === '' || str.trim().length > 140) return false

  else {
    const stringWithCamelCase = str.split(' ').map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join('');

    const stringWithHashtag = `#${stringWithCamelCase.trim()}`

    console.log(stringWithHashtag.trim())
  }
}

generateHashtag(word)
