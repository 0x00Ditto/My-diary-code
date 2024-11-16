// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  const triangle = [];

  // We push an array into a array to built the triangle
  // And the first row is one
  triangle.push([]);
  triangle[0].push(1);

  for(let rowNum = 1 ; rowNum < numRows; rowNum++){
      let row = [];
      let prevRow = triangle[rowNum - 1];

      // We always start a new line with 1
      row.push(1);
      for(let j = 1; j < rowNum; j++){
          row.push(prevRow[j - 1] + prevRow[j]);
      }

      // The last element of the triangle is always 1
      row.push(1);
      triangle.push(row);
  }
  return triangle
};