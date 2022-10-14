const validateValue = require('./validateValue');

test('Value validation', () => {
    expect(validateValue(40)).toBe('good');
});

/* Test wrapper */
describe('Validate values test cases', () => {
    test('Equal or more than 100', () => {
        expect(validateValue(101)).toBe('bad');
    });
    test('Equal or less than 0', () => {
        expect(validateValue(-102)).toBe('bad');
    });
    test('From 0 to 100', () => {
        expect(validateValue(32)).toBe('good');
    });
    test('Marginal value equal 100', () => {
        expect(validateValue(100)).toBe('bad');
    });
    test('Marginal value equal 0', () => {
        expect(validateValue(0)).toBe('bad');
    });
});