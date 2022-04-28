const checkPalindrom = require("../src/palindromo");

describe("Palindrome", () => {
  it("should check if the words is palindrome", () => {
    expect(checkPalindrom("Rotator")).toBe(true);
    expect(checkPalindrom("bob")).toBe(true);
    expect(checkPalindrom("madam")).toBe(true);
    expect(checkPalindrom("mAlAyAlam")).toBe(true);
    expect(checkPalindrom("1")).toBe(true);
    expect(checkPalindrom("Able was I, ere I saw Elba")).toBe(true);
    expect(checkPalindrom("Madam I'm Adam")).toBe(true);
    expect(checkPalindrom("Step on no pets.")).toBe(true);
    expect(checkPalindrom("Top spot!")).toBe(true);
    expect(checkPalindrom("02/02/2020")).toBe(true);
  });

  it("should check if the words is not palindrome", () => {
    expect(checkPalindrom("xyz")).toBe(false);
    expect(checkPalindrom("elephant")).toBe(false);
    expect(checkPalindrom("Country")).toBe(false);
    expect(checkPalindrom("Top . post!")).toBe(false);
    expect(checkPalindrom("Wonderful-fool")).toBe(false);
    expect(checkPalindrom("Wild imagination!")).toBe(false);
  });
});
