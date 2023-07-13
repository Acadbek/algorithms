class Stack {
  constructor() {
    this.arr = []
  }

  push(e) {
    this.arr.push(e)
  }
}

const s = new Stack()

function reverse_num(n) {
  let revNum = 0;
  while (n > 0) {
    revNum = (revNum * 10) + (n % 10);
    s.push(revNum)
    n = Math.floor(n / 10)
  }
  return revNum;
}

reverse_num(123);