//https://leetcode.com/problems/sleep/

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return await new Promise((resolve) => {
      setTimeout(() => {
          resolve(millis);
      }, millis);
  });
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/