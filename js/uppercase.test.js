const uppercase = require('./uppercase');

test('Expect first character to be upper case', () => {
     let text = 'hello';
     let upperCase = text.charAt(0).toUpperCase();
     expect(uppercase('hello')).toBe(upperCase);
});