const length = require('./length');

test('Expect the length of string', () => {
    let nameLength = 'Ben'.length;
    expect(length("ben")).toBe(nameLength);
})