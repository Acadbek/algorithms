function solution(value1, weight1, value2, weight2, maxW) {
  const canTakeBoth = weight1 + weight2 <= maxW;
  const valueIfTakeBoth = canTakeBoth ? value1 + value2 : 0;
  const valueIfTakeFirst = weight1 <= maxW ? value1 : 0;
  const valueIfTakeSecond = weight2 <= maxW ? value2 : 0;

  console.log(Math.max(valueIfTakeBoth, valueIfTakeFirst, valueIfTakeSecond));
}

solution(10, 5, 7, 4, 1)