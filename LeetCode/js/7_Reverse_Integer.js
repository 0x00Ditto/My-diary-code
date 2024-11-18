/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

  let reversed = Number(String(Math.abs(x)).split('').reverse().join(''));

  if(x < 0){
      reversed = -reversed;
  }
 
  if(reversed < -(2 ** 31) || reversed > 2 ** 31 - 1 ){
      return 0;
  }
  return reversed
};

//ChatGPT helped me to understand this [-2^31, 2^31 - 1]