const checkPalindrom = require("../src/palindromo");

describe("Palindrome", () => {
  it("should check if the words is palindrome", () => {
    const wordList = [
      "Rotator",
      "bob",
      "madam",
      "mAlAyAlam",
      "1",
      "Able was I, ere I saw Elba",
      "Madam I'm Adam",
      "Step on no pets.",
      "Top spot!",
      "02/02/2020",
    ];

    wordList.map((word) => {
      expect(checkPalindrom(word)).toBe(true);
    });
  });

  it("should check if the words is not palindrome", () => {
    const wordList = [
      "xyz",
      "elephant",
      "Country",
      "Top . post!",
      "Wonderful-fool",
      "Wild imagination!",
      "henrique",
    ];

    wordList.map((word) => {
      expect(checkPalindrom(word)).toBe(false);
    });
  });
});
