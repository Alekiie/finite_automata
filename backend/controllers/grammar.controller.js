const { checkWord } = require("../utils/wordChecker");
const { generateRandomRLG } = require("../utils/automata");
const grammar = generateRandomRLG();

const word = "a";
const isAccepted = checkWord(word, "S", grammar);
console.log(
  `The word "${word}" is ${
    isAccepted ? "accepted" : "not accepted"
  } by the grammar.`
);
