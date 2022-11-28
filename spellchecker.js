const WORDBANK = ['hello', 'good', 'morning', 'these', 'words', 'are', 'spelt', 'correctly'];

const spellcheck = (uncheckedString) => {
  let words = uncheckedString.split(' ');
  let wordsChecked = [];
  words.forEach((word) => {
    if (WORDBANK.includes(word.toLowerCase())) {
      wordsChecked.push(word)
    } else {
      wordsChecked.push('~' + word + '~');
    }
  })

  return wordsChecked.join(' ');
}

module.exports = spellcheck;