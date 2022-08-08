//===================
/**
 * Calculate a fibonacci sequence up to number 'num' of sequence iteratively.
 * @param {number} num 
 * @returns array - fibonacci sequence
 */
function fibs(num) {
  const seq = [0, 1];
  if (num <= 2) return seq.slice(0, num);
  for (let i = 2; i < num; i++) {
    seq.push(seq[i - 2] + seq[i - 1]);
  }
  return seq;
}

console.log(fibs(3));

/**
 * Calculate a fibonacci sequence up to number 'num' of sequence recursively.
 * @param {number} num 
 * @param {Array<number>} seq 
 * @returns array - fibonacci sequence
 */
function fibsRec(num, seq = [0, 1]) {
  return num < 1 
    ? `number ${num} of a sequence is not possible` 
    : num <= 2
    ? seq.slice(0, num) 
    : num === seq.length 
    ? seq 
    : fibsRec(num, seq.concat(seq.at(-2) + seq.at(-1)));
}

console.log(fibsRec(12));
