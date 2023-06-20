function sum_of_two(sum, arr) {
  const visited = [];

  for (let i = 0; i < arr.length; i++) {
    const complement = sum - arr[i];

    console.log(visited);
    if (visited[complement]) {
      // console.log(true)
    }
    visited[arr[i]] = true;
  }

  // console.log(false);
}

sum_of_two(3, [1, -10, 24, 3, 2]);

// Input: sum = 3, arr = [1, -10, 24, 3, 2]
// Output: True # Chunki array ichida 1 va 2 ni qo'shsangiz 3 chiqadi


// Input: sum = 10, arr = [1, -10, 24, 3, 0]
// Output: False # Bu yerdagi hech bir ikki sonni yig'indisi 10ga teng emas.


// Input: sum = 25, arr = [50, 1, 3, 0, -25, 24, 3, 0]
// Output: True # Chunki 50 va - 25 qo'shilsa 25 chiqadi


// Input: sum = 7, arr = [1, 1, 10, 1001, 2013, 81, 89, -55, -34, -2]
// Output: False # Bu yerdagi hech bir ikki sonni yig'indisi 7ga teng emas