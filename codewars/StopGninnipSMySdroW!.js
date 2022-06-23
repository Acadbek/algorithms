function spinWords(string) {
  console.log(string.replace(/\w{5,}/g, word => word.split('').reverse().join('')));
}

spinWords('Welcome')