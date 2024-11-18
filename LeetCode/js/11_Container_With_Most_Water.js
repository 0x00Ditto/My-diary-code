/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while(left < right){
      let width = right - left;
      // Update the maximum area:
      // The area is determined by the shorter of the two heights
      // multiplied by the width. Use Math.max to track the largest area.
      maxArea = Math.max(
          maxArea,
          Math.min(height[left], height[right]) * width,
      );
      // Move the shorter bar
      // To increase the chance to find a larger Area
      if(height[left] <= height[right]){
          left++;
      }else {
          right--;
      }

  }
  
  return maxArea
};