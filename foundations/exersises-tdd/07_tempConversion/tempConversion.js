const ftoc = function(tempInF) {
  const c = (tempInF -32) * (5/9);
  return roundTo1Dp(c);
};

const ctof = function(tempInC) {
    const f = tempInC * (9/5) + 32;
    return roundTo1Dp(f);
};

function roundTo1Dp(number) {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
