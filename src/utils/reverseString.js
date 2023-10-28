export const reverseWordsInString = (str) => {
    const reverseWord = (word) => {
      if (word === "") {
        return "";
      }
      return reverseWord(word.substring(1)) + word[0];
    };
  
    const words = str.split(" ");
    const reversedWords = words.map(word => reverseWord(word));
    return reversedWords.join(" ");
  }


