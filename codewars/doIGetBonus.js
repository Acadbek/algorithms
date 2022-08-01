function bonusTime(salary, bonus) {
  if (bonus) {
    console.log(salary * 10);
  } else {
    console.log(salary);
  }

  console.log(bonus ? console.log(typeof`${salary}` * 10) : console.log(`${salary}`));

  // console.log(bonus == true);
  // return bonus === true ? console.log(`£${salary}` * 10) : console.log(`£${salary}`)
}

bonusTime(10000, true)