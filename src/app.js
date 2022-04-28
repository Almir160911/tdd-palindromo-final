const express = require("express");
const checkPalindrom = require("./palindromo");

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.init();
  }

  middlewares() {
    this.express.listen(3000);
  }

  init() {
    console.log("============START===========");
    const word = "mAlAyAlam";
    const isPalindromo = checkPalindrom(word);
    console.log(`A palavra ${word} é um palindromo? ${isPalindromo}`);
  }
}

module.exports = new AppController();
