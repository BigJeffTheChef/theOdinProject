function capitalize(word) {
  const lower = word.substring(1).toLowerCase();
  const first = word.charAt(0).toUpperCase();
  return first + lower;
}

function reverseString(str) {
  const arr = str.split('');
  const rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev.join('');
}

class Calculator {
  add(addend1, addend2) {
    return addend1 + addend2;
  }
  subtract(minuend, subtrahend) {
    return minuend - subtrahend;
  }
  divide(dividend, divisor) {
    return dividend / divisor;
  }
  multiply(multiplicand, mulitpler) {
    return multiplicand * mulitpler;
  }
}

function caesarCipher(text, adjustor) {
  const codes = text.split('').map(e => e.charCodeAt(0));
  let encoded = codes.map(e => {
    if (e >= 97 && e <= 122) {
      // is a lower case letter
      return wrap(e + adjustor, 97, 122);
    } else if (e >= 65 && e <= 90) {
      // is an upper case letter
      return wrap(e + adjustor, 65, 90);
    } else {
      return String.fromCharCode(e);
    }
  }).join('');
  return encoded;

  function wrap(charCode, lower, upper) {
    const range = upper - lower;
    if (charCode < lower) {
      return String.fromCharCode(charCode + (range + 1));
    } else if (charCode > upper) {
      return String.fromCharCode(charCode - (range + 1));
    } else {
      return String.fromCharCode(charCode);
    }
  }
}

function analyzeArray(arrOfNums) {
  const average = arrOfNums.reduce((prev, cur) => prev + cur, 0) / arrOfNums.length;
  const min = arrOfNums.reduce((prev, cur) => (cur < prev) ? cur : prev, Number.MAX_SAFE_INTEGER);
  const max = arrOfNums.reduce((prev, cur) => (cur > prev) ? cur : prev, Number.MIN_SAFE_INTEGER);
  return {
    average,
    min,
    max,
    length: arrOfNums.length,
  };
}


export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };