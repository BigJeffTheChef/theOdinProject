//===================
function fibs(num) {
  const seq = [0, 1];
  if (num <= 2) return seq.slice(0, num);
  for (let i = 2; i < num; i++) {
    seq.push(seq[i - 2] + seq[i - 1]);
  }
  return seq;
}
console.log(fibs(3));

//===================

function fibsRec(num) {
  const seq = new Array(num - 1).fill(null);
  for (let i = 1; i <= num; i++) seq[i - 1] = f(i);
  return seq;
}

function f(number) {
  if (number <= 0) throw Error('cannot find zeroth number of fibonacci sequence');
  return (number === 1 || number === 2) ? number - 1 : f(number - 2) + f(number - 1);
}

console.log(f(8));
console.log(fibsRec(8));


