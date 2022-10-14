const square = require('./square');

describe('Square test suit', () => {
    let mockValue;
    // call before every
    beforeEach(() => {
    });
    // call before all
    beforeAll(() => {
    });
    test('Correct values', () => {
        expect(square(2)).toBe(4);
        expect(square(4)).toBeGreaterThan(5);
        expect(square(5)).toBeLessThan(26);
        expect(square(6)).not.toBeUndefined();
    });

    test('Test with mock 1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        square(2);
        square(4);
        expect(spyMathPow).toBeCalledTimes(2);
    });

    test('Test with mock 2', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        square(2);
        square(4);
        expect(spyMathPow).toBeCalledTimes(2);
    });

    // call after every
    afterEach(() => {
        jest.clearAllMocks();
    });
    // call after all
    afterAll(() => {
    });

});