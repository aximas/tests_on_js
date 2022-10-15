const delay = require('./delay');

describe('delay', () => {
    test('Correct values', async () => {
        const sum = await delay(() => 5 + 1, 2);
        expect(sum).toBe(6);
    });
});