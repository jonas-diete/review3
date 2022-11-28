const spellcheck = require('./spellchecker');

describe('Spellchecker', () => {
  it('returns a correctly spelled word', () => {
    expect(spellcheck('hello')).toBe('hello');
  })

  it('returns two correctly spelled words', () => {
    expect(spellcheck('good morning')).toBe('good morning');
  })

  it('returns a misspelt word with ~', () => {
    expect(spellcheck('helbo')).toBe('~helbo~');
  })

  it('returns two misspelt words ~', () => {
    expect(spellcheck('helbo worbd')).toBe('~helbo~ ~worbd~');
  })

  it('returns correct and misspelt word ~', () => {
    expect(spellcheck('hello worbd')).toBe('hello ~worbd~');
  })

  it('returns correct and misspelt word ~', () => {
    expect(spellcheck("these words are spnelt correclty")).toBe("these words are ~spnelt~ ~correclty~");
  })

  it('returns word with capital letters correctly', () => {
    expect(spellcheck("Hello")).toBe("Hello");
  })
})