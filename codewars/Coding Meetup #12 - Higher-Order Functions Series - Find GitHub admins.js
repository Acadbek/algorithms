// Given the following input array:
// write a function that when executed as findAdmin(list1, 'JavaScript') 
// returns only the JavaScript developers who are GitHub admins:


// [Uzbek]

// Faqat Githubda ishlaydigan js developerlarni qaytaring


function findAdmin(list, lang) {
  return list.filter((item) => {
    if (!item.language) return []
    else {
      console.log(item.language === lang && item.githubAdmin === 'yes' ? item : '')
    }
  })
}

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];

findAdmin(list1, 'JavaScript')