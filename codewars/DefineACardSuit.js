// My solution
function defineSuit(card) {
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♥')) return 'hearts'
  }
defineSuit('♣')


// Best Practices
function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    console.log(s[card.charAt(card.length - 1)])
  }

  defineSuit('♦')