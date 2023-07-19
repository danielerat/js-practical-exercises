function reversedWord(word) {
  // Split the word into an array ["I", "am"..]
  // Reverse Each word of the array ["I","ma"..]
  const splitedWords = word.split(" ");
  const reversedSplit = splitedWords.map((word) => {
    // console.log(word);
    return [...word].reverse().join("");
  });
  return reversedSplit.join(" ");
}
