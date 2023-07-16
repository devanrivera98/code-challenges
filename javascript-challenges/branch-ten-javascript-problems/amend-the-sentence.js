export function amendSentence(sentence) {
  let newSentence = sentence;
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i] === newSentence[i].toUpperCase() && i !== 0) {
      // console.log(sentence.indexOf(sentence[i]));
      newSentence = newSentence.replace(newSentence[i], ` ${newSentence[i].toLowerCase()}`);
    } else {
      newSentence = newSentence.replace(newSentence[i], `${newSentence[i].toLowerCase()}`);
    }
  }
  return newSentence;
}
