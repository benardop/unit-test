const reverseString = require('./reverseString');
test('Expect the reverse of string', () => {
    let text = 'hello'.split('').reverse().join('')
    expect(reverseString('hello')).toBe(text);
})