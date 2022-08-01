// Create a function that takes an integer as an argument and returns "Even" for even 
// numbers or "Odd" for odd numbers.

// -----------------------------------------------------------------------

// Uzbek:
// Argument sifatida butun sonni oladigan va osha son juft bolsa 'Even' toq bolsa 'Odd'
// qaytaradgan function yozing


function even_or_odd(number) {
  return (number % 2 === 0 ? console.log('Even') : console.log('Odd'));
}

even_or_odd(7)