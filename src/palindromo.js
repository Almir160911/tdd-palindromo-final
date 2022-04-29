function checkPalindrom(str) {
  const word = str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/,/g, "")
    .replace(/\s+/g, "")
    .replace("'", "")
    .replace("!", "")
    .replace("?", "")
    .replace("-", "")
    .replace("/", "")
    .replace(/\./g, "");

  return word === word.split("").reverse().join("");
}

module.exports = checkPalindrom;
