// sort left half of array
// sort right half of array
// merge together

const data1 = [5, 2, 1, 3, 6, 4];
const data2 = [-5, 8, 7, 9, 500, 2, 12, 15, 20];
const data3 = [-5, 8, 7, 9, 500, 2, 12, 15, 20].concat([-5, 8, 7, 9, 500, 2, 12, 15, 20]);
const data4 = [5, 2, 1, 3, 6, 4];
const data5 = [5, 2, 1, 3, 6, 4];

const sortedData = mergeSort(data3);
console.log(sortedData);


/**
 * 
 * @param {Array<number>} data 
 */
function mergeSort(data) {
  if (data.length === 1) return data; // base case
  const splitPoint = Math.floor(data.length / 2);
  return merge(mergeSort(data.slice(0, splitPoint)), mergeSort(data.slice(splitPoint)));
  /**
   * merge two arrays together
   * @param {Array<number>} left 
   * @param {Array<number>} right 
   * @returns merged
   */
  function merge(left, right) {
    const arr = [];
    while (left.length > 0 && right.length > 0) {
      arr.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return arr.concat(left.length === 0 ? right : left);
  }

}


