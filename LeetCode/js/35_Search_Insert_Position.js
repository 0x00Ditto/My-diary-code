/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let pivot = 0;
  let left = 0;
  let right = nums.length - 1;

  while(left <= right){
      pivot = left + Math.floor((right - left) / 2);
      if(target === nums[pivot]) return pivot;
      if(target < nums[pivot]) right = pivot - 1;
      else left = pivot + 1
  }
  return left
};