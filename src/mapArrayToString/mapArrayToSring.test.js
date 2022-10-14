const mapArrayToString = require('./mapArrayToString');

describe('Array values to string tests suite', () => {
    test('Correct values', () => {
        expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3']);
    });
    test('Mix values', () => {
        expect(mapArrayToString([1, 2, 3, null, undefined, 'dsad2'])).toEqual(['1', '2', '3']);
    });
    test('Empty array', () => {
        expect(mapArrayToString([])).toEqual([]);
    });
    test('Negative', () => {
        expect(mapArrayToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    });
});