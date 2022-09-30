// Even/Odd For loop Function

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
