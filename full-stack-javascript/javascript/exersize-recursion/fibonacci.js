
console.log(fibs(8));
console.log(fibsArrayRec(4));

function fibs(fibIndex) {
  if (fibIndex === 0) throw new Error('cant have the 0th number of a sequence laddy.');
  const nums = [0];
  if (fibIndex === 1) return nums;
  nums.push(1);
  for (let i = 2; i < fibIndex; i++) {
    nums.push(nums[i-1] + nums[i-2]);
  }
  return nums;
}

function fibsArrayRec(n) {
  const seq = [];
  for (let i = 0; i < n; i++) {
    seq.push(fibsRec(i));
  }
  return seq;
}

function fibsRec(fibIndex) {
  // base case
  if (fibIndex <= 1) return 0;
  if (fibIndex === 2) return 1;

  const prev1 = fibsRec(fibIndex - 1);
  const prev2 = fibsRec(fibIndex- 2 );
  return prev1 + prev2;
  const seq = [];
  seq.push(prev2);
  seq.push(prev1);
  const next = prev1 + prev2;
  
  return next;

}

// base case: if fibIndex is <= 1 return that number;
// otherwise, create an array