/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let result = Array(2 * n);
  console.log(result)
  for (let i = 0; i < n; i++) {
      result[2 * i] = nums[i];
      result[2 * i + 1] = nums[n + i];
      console.log(`${i} iteration : ${result}`)
  }
  return result;
};