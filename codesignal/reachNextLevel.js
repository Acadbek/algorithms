function solution(experience, threshold, reward) {
  if (experience + reward >= threshold) {
    return true
  } else {
    return false
  }
}
