const express = require("express");
const checkPalindrom = require("./palindromo");

const app = express();

const port = 3000;

app.use(express.json({ limit: "20mb" }));

app.post("/checkPalindrom", (req, res) => {
  console.log(req.body);
  const word = req.body.word;
  const isPalindrom = checkPalindrom(word);
  res.send(isPalindrom);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
