function is_prime(num) {
  if (num <= 1) return false;


  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// if (is_prime(45)) return true;
// else return false;