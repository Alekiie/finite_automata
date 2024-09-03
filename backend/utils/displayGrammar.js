const generateRandomRLG = require("./automata").generateRandomRLG;

// Function to display the RLG and return it as a string
function displayGrammar(grammar) {
  let grammarString = "";
  for (const [nonTerminal, productions] of Object.entries(grammar)) {
    const productionStrings = productions.map((p) => p || "ε").join(" | ");
    grammarString += `${nonTerminal} -> ${productionStrings}\n`;
  }
  return grammarString;
}

const generatedGrammar = displayGrammar(generateRandomRLG());

module.exports = {  generatedGrammar };
