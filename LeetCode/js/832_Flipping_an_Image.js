/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
  for (let i = 0; i < image.length; i++) {
      let start = 0;
      let end = image[i].length - 1;
      
      while (start <= end) {
          // Swap and invert at the same time
          if (image[i][start] === image[i][end]) {
              image[i][start] = 1 - image[i][start];
              image[i][end] = image[i][start];
          }
          start++;
          end--;
      }
  }
  return image;
};
