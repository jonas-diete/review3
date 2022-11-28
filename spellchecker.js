const WORDBANK = ['hello', 'good', 'morning'];

const spellcheck = (uncheckedString) => {
  let words = uncheckedString.split(' ');
  let wordsChecked = [];
  words.forEach((word) => {
    if (WORDBANK.includes(word)) {
      wordsChecked.push(word)
    } else {
      wordsChecked.push('~' + word + '~');
    }
  })

  return wordsChecked.join(' ');
}

module.exports = spellcheck;