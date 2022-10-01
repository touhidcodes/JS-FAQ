// Even/Odd For loop Function
/*
function evenify_all(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
      console.log(num, ": is even number");
    } else {
      console.log(num * 2, ": is odd number");
    }
  }
}

let nums = [5, 23, 45, 76, 56, 78, 556, 53];
evenify_all(nums);

let friends_age = [13, 20, 19, 15, 17, 16, 14, 18];
evenify_all(friends_age);

*/
// Even/Odd For loop Function Return

function evenify(number2) {
  if (number2 % 2 == 0) {
    return number2;
  } else {
    return number2 * 2;
  }
}

function evenify_for(number) {
  var even_array = [];
  for (let i = 0; i < number.length; i++) {
    const number2 = number[i];
    var output = evenify(number2);
    even_array.push(output);
  }
  return even_array;
}

var number = [2, 4, 7, 2, 5, 9, 8, 4, 3];
var result = evenify_for(number);
console.log(result);
