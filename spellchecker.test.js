const spellcheck = require('./spellchecker');

describe('Spellchecker', () => {
  it('returns a correctly spelled word', () => {
    expect(spellcheck('hello')).toBe('hello');
  })
})