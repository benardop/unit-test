const reverseString = require('./reverseString');
test('Expect the reverse of string', () => {
    expect(reverseString('test')).toBe(reverseString('test'));
})