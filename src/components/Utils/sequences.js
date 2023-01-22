let limit = 8;
export function fibonacci(nums, breakLimit) {
  let data = [1, 1];

  for (let i = 2; i < limit; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
    if (nums[i] > breakLimit) {
      data.push(nums[i]);
      data.shift();
      break;
    } else {
      data.push(nums[i]);
    }
  }
  return data;
}
