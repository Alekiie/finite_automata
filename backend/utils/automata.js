
function generateRandomRLG() {
  const nonTerminals = ["S", "A", "B", "C", "D"];
  const terminals = ["a", "b", "c"];
  const grammar = {};
  const maxProductions = 3; // Maximum number of productions per non-terminal
  const maxLength = 2; // Maximum length of the right-hand side of a production

  nonTerminals.forEach((nonTerminal) => {
    const numberOfProductions = Math.floor(Math.random() * maxProductions) + 1;
    const productions = new Set();
    let hasRequiredNonTerminal = false;

    for (let i = 0; i < numberOfProductions; i++) {
      let production = "";
      const productionLength = Math.floor(Math.random() * maxLength) + 1;

      for (let j = 0; j < productionLength; j++) {
        if (
          Math.random() > 0.3 ||
          (nonTerminal === "S" && j === productionLength - 1)
        ) {
          production += terminals[Math.floor(Math.random() * terminals.length)];
        } else {
          let nextNonTerminal =
            nonTerminals[Math.floor(Math.random() * nonTerminals.length)];

          // Avoid self-references in `S` and prioritize other non-terminals
          while (nonTerminal === "S" && nextNonTerminal === "S") {
            nextNonTerminal =
              nonTerminals[Math.floor(Math.random() * (nonTerminals.length - 1)) + 1];
          }

          production += nextNonTerminal;

          if (nonTerminal === "S" && ["A", "B", "C", "D"].includes(nextNonTerminal)) {
            hasRequiredNonTerminal = true;
          }
        }
      }

      productions.add(production);
    }

    // Ensure at least one production for S contains A, B, C, or D
    if (nonTerminal === "S" && !hasRequiredNonTerminal) {
      const randomTerminal = terminals[Math.floor(Math.random() * terminals.length)];
      const randomNonTerminal = nonTerminals[Math.floor(Math.random() * (nonTerminals.length - 1)) + 1];
      productions.add(randomTerminal + randomNonTerminal);
    }

    grammar[nonTerminal] = Array.from(productions);
  });

  return grammar;
}


module.exports = { generateRandomRLG };
