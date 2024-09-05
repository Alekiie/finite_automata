const grammar = require("../utils/automata");
const generateGrammarController = (req, res) => {
  const generatedGrammar = grammar.generateRandomRLG();
  res.status(200).json(generatedGrammar);
};
module.exports = generateGrammarController;
