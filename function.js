// Even Odd Function
number = [5, 23, 45, 76, 56, 78, 556, 53];

for (let i = 0; i < number.length; i++) {
  const num = number[i];
  if (num % 2 == 0) {
    console.log(num, ": is even number");
  } else {
    console.log(num, ": is odd number");
  }
}
