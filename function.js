// Even/Odd For loop Function
nums = [5, 23, 45, 76, 56, 78, 556, 53];

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
