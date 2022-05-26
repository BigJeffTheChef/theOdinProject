
const calculator = require('./script');

describe('simple addition', () => {
    test('1+1=2?', () => {
        expect(calculator.solve('1+1')).toBe('2');
    });
    test('0.1+1=1.1?', () => {
        expect(calculator.solve('0.1+1')).toBe('1.1');
    });
}); 

describe('simple multiplication', ()=> {
    test('2*4=8?', () => {
        expect(calculator.solve('2*4')).toBe('8');
    });
    test('22*3=66?', () => {
        expect(calculator.solve('22*3')).toBe('66');
    });    
});

describe('whitespace removal from equation', () => {
    // not implemented
});
