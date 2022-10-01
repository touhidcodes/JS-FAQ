// JS Function Argument
function sumNum(num1, num2) {
  console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum = sum + num;
  }
  return sum;
}

var result = sumNum(2, 3, 5, 64, 5);
console.log(result);
