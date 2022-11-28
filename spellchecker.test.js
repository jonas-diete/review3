const spellcheck = require('./spellchecker');

describe('Spellchecker', () => {
  it('returns a correctly spelled word', () => {
    expect(spellcheck('hello')).toBe('hello');
  })

  it('returns a correctly spelled word', () => {
    expect(spellcheck('good morning')).toBe('good morning');
  })

  it('returns a misspelt word with ~', () => {
    expect(spellcheck('helbo')).toBe('~helbo~');
  })
})