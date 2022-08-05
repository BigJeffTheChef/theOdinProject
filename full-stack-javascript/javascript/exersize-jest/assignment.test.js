import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } from './assignment.js';

test('\'test\' becomes \'Test\'', () => {
  expect(capitalize('test')).toBe('Test');
});

test('\'a raNdom StRing\' becomes \'gniRtS modNar a\'', () => {
  expect(reverseString('a raNdom StRing')).toBe('gniRtS modNar a');
});

describe('calculator object', () => {
  const calc = new Calculator();

  test('1 + 1 = 2', () => {
    expect(calc.add(1, 1)).toBe(2);
  });

  test('2 * 5 = 10', () => {
    expect(calc.multiply(2, 5)).toBe(10);
  });

  test('6 - 1 = 5', () => {
    expect(calc.subtract(6, 1)).toBe(5);
  });

  test('20 / 5 = 4', () => {
    expect(calc.divide(20, 5)).toBe(4);
  });

  test('5 / 2 to be close to 2.5', () => {
    expect(calc.divide(5, 2)).toBeCloseTo(2.5);
  });

  test('0.1 + 0.2 to be close to 0.3', () => {
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('caesar cipher', () => {

  describe('letters only', () => {
    describe('basic letters with no wrapping', () => {
      test('\'a\' + 1 becomes \'b\'', () => {
        expect(caesarCipher('a', 1)).toBe('b');
      });

      test('\'A\' + 1 becomes \'B\'', () => {
        expect(caesarCipher('A', 1)).toBe('B');
      });

      test('\'z\' - 1 becomes \'y\'', () => {
        expect(caesarCipher('z', -1)).toBe('y');
      });

      test('\'Z\' - 1 becomes \'Y\'', () => {
        expect(caesarCipher('Z', -1)).toBe('Y');
      });
    });

    describe('basic letters with wrapping', () => {
      test('\'a\' - 1 becomes \'z\'', () => {
        expect(caesarCipher('a', -1)).toBe('z');
      });

      test('\'A\' - 1 becomes \'Z\'', () => {
        expect(caesarCipher('A', -1)).toBe('Z');
      });

      test('\'z\' + 1 becomes \'a\'', () => {
        expect(caesarCipher('z', 1)).toBe('a');
      });

      test('\'Z\' + 1 becomes \'A\'', () => {
        expect(caesarCipher('Z', 1)).toBe('A');
      });
    });

    describe('multiple letters with no wrapping', () => {
      test('\'abc\' + 1 becomes \'bcd\'', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
      });

      test('\'ABC\' + 1 becomes \'BCD\'', () => {
        expect(caesarCipher('ABC', 1)).toBe('BCD');
      });

      test('\'xyz\' - 1 becomes \'wxy\'', () => {
        expect(caesarCipher('xyz', -1)).toBe('wxy');
      });

      test('\'XYZ\' - 1 becomes \'WXY\'', () => {
        expect(caesarCipher('XYZ', -1)).toBe('WXY');
      });
    });

    describe('multiple letters with wrapping', () => {
      test('\'abZ\' + 1 becomes \'bcA\'', () => {
        expect(caesarCipher('abz', 1)).toBe('bca');
      });

      test('\'ABZ\' + 1 becomes \'BCA\'', () => {
        expect(caesarCipher('ABZ', 1)).toBe('BCA');
      });

      test('\'ayz\' - 1 becomes \'zxy\'', () => {
        expect(caesarCipher('ayz', -1)).toBe('zxy');
      });

      test('\'AYZ\' - 1 becomes \'ZXY\'', () => {
        expect(caesarCipher('AYZ', -1)).toBe('ZXY');
      });
    });
  });

  describe('letters and punctuation and spaces', () => {
    describe('letters and punctuation and spaces with no wrapping', () => {
      test('\'a!b\' + 1 becomes \'b!c\'', () => {
        expect(caesarCipher('a!b', 1)).toBe('b!c');
      });

      test('\'A!B\' + 1 becomes \'B!C\'', () => {
        expect(caesarCipher('A!B', 1)).toBe('B!C');
      });

      test('\'z#\' - 1 becomes \'y#\'', () => {
        expect(caesarCipher('z#', -1)).toBe('y#');
      });

      test('\'Z#\' - 1 becomes \'Y#\'', () => {
        expect(caesarCipher('Z#', -1)).toBe('Y#');
      });

      test('\'Z #\' - 1 becomes \'Y #\'', () => {
        expect(caesarCipher('Z #', -1)).toBe('Y #');
      });
    });

    describe('letters and punctuation and spaces with wrapping', () => {
      test('\'a!\' - 1 becomes \'z!\'', () => {
        expect(caesarCipher('a!', -1)).toBe('z!');
      });

      test('\'A!\' - 1 becomes \'Z!\'', () => {
        expect(caesarCipher('A!', -1)).toBe('Z!');
      });

      test('\'z#\' + 1 becomes \'a#\'', () => {
        expect(caesarCipher('z#', 1)).toBe('a#');
      });

      test('\'Z#\' + 1 becomes \'A#\'', () => {
        expect(caesarCipher('Z#', 1)).toBe('A#');
      });

      test('\'a !\' - 1 becomes \'z !\'', () => {
        expect(caesarCipher('a !', -1)).toBe('z !');
      });
    });

    describe('multiple letters and punctuation and spaces with no wrapping', () => {
      test('\'a!b#c\' + 1 becomes \'b!c#d\'', () => {
        expect(caesarCipher('a!b#c', 1)).toBe('b!c#d');
      });

      test('\'A!B#C\' + 1 becomes \'B!C#D\'', () => {
        expect(caesarCipher('A!B#C', 1)).toBe('B!C#D');
      });

      test('\'x!y#z\' - 1 becomes \'w!x#y\'', () => {
        expect(caesarCipher('x!y#z', -1)).toBe('w!x#y');
      });

      test('\'X!Y#Z\' - 1 becomes \'W!X#Y\'', () => {
        expect(caesarCipher('X!Y#Z', -1)).toBe('W!X#Y');
      });

      test('\'X! Y# Z\' - 1 becomes \'W! X# Y\'', () => {
        expect(caesarCipher('X! Y# Z', -1)).toBe('W! X# Y');
      });
    });

    describe('multiple letters and punctuation and spaces with with wrapping', () => {
      test('\'a!b#z\' + 1 becomes \'b!c#a\'', () => {
        expect(caesarCipher('a!b#z', 1)).toBe('b!c#a');
      });

      test('\'A!B#Z\' + 1 becomes \'B!C#A\'', () => {
        expect(caesarCipher('A!B#Z', 1)).toBe('B!C#A');
      });

      test('\'a!y#z\' - 1 becomes \'z!x#y\'', () => {
        expect(caesarCipher('a!y#z', -1)).toBe('z!x#y');
      });

      test('\'A!Y#Z\' - 1 becomes \'Z!X#Y\'', () => {
        expect(caesarCipher('A!Y#Z', -1)).toBe('Z!X#Y');
      });

      test('\'A! Y# Z\' - 1 becomes \'Z! X# Y\'', () => {
        expect(caesarCipher('A! Y# Z', -1)).toBe('Z! X# Y');
      });
    });
  });
});

describe('analyzeArray(arrayOfNums)', () => {
  describe('simple integer reponses', () => {
    test('[2,2,2,2]', () => {
      expect(analyzeArray([2,2,2,2])).toEqual({
        average: 2,
        min: 2,
        max: 2,
        length: 4
      });
    });
  
    test('[1,2,2,3]', () => {
      expect(analyzeArray([1,2,2,3])).toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 4
      });
    });

    test('[1,3,5,7,4]', () => {
      expect(analyzeArray([1,3,5,7,4])).toEqual({
        average: 4,
        min: 1,
        max: 7,
        length: 5
      });
    });
  });

  describe('integers in, floating points out', () => {
    test('[2,2,2,3] in', () => {
      const result = analyzeArray([2,2,2,3]);
      expect(result.average).toBeCloseTo(2.25);
      expect(result.min).toBe(2);
      expect(result.max).toBe(3);
      expect(result.length).toBe(4);
    });

    test('[0.1,2,2,3.2] in', () => {
      const result = analyzeArray([0.1,2,2,3.2]);
      expect(result.average).toBeCloseTo(1.825);
      expect(result.min).toBe(0.1);
      expect(result.max).toBe(3.2);
      expect(result.length).toBe(4);
    });
  });
});

