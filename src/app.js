const express = require("express");
const checkPalindrom = require("./palindromo");

const app = express();

const port = 3000;

app.use(express.json({ limit: "20mb" }));

app.post("/checkPalindrom", (req, res) => {
  const word = req?.body?.word;
  if (word) {
    const isPalindrom = checkPalindrom(word);
    res.send(isPalindrom);
  } else {
    res.send({ message: "É necessario informar uma frase/palavra" });
  }
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
