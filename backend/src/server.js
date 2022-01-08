const express = require("express");
const {
  getPossibleWords
} = require('./possible-words');


const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/convert/:numbers", (req, res) => {
    const numbers = req.params.numbers;
    const possibleWords = getPossibleWords(numbers);

    // TODO: check words are valid
    res.status(200).json({ possibleWords });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});