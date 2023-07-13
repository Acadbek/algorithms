function solution(n) {
  const hours = Math.floor(n / 60);
  const mins = n % 60;
  
  const hoursStr = hours.toString().padStart(2, '0');
  const minsStr = mins.toString().padStart(2, '0');
  console.log(hours);

  const sum = Array.from(hoursStr + minsStr)
    .reduce((acc, digit) => acc + parseInt(digit), 0);

  // console.log(sum);
}

solution(1439) // 19