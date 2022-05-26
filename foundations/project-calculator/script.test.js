
const calculator = require('./script');

test('1+1=2?', () => {
    expect(calculator.solve('1+1')).toBe('2');
});
test('2*4=8?', () => {
    expect(calculator.solve('2*4')).toBe('8');
})