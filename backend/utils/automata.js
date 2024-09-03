const readline = require('readline');

// Function to generate a random RLG with meaningful productions
function generateRandomRLG() {
    const nonTerminals = ['S', 'A', 'B', 'C', 'D'];
    const terminals = ['a', 'b', 'c'];
    const grammar = {};
    const maxProductions = 3; // Maximum number of productions per non-terminal
    const maxLength = 2; // Maximum length of the right-hand side of a production

    nonTerminals.forEach((nonTerminal, index) => {
        const numberOfProductions = Math.floor(Math.random() * maxProductions) + 1;
        const productions = [];

        for (let i = 0; i < numberOfProductions; i++) {
            let production = '';
            const productionLength = Math.floor(Math.random() * maxLength) + 1;

            for (let j = 0; j < productionLength; j++) {
                // Prioritize terminals in the production
                if (Math.random() > 0.3 || (index === 0 && j === productionLength - 1)) { 
                    production += terminals[Math.floor(Math.random() * terminals.length)];
                } else {
                    // Avoid too many self-references to avoid infinite loops
                    let nextNonTerminal = nonTerminals[Math.floor(Math.random() * nonTerminals.length)];
                    while (nextNonTerminal === nonTerminal && Math.random() < 0.7) {
                        nextNonTerminal = nonTerminals[Math.floor(Math.random() * nonTerminals.length)];
                    }
                    production += nextNonTerminal;
                }
            }

            // Ensure there's at least one terminal-only production in S
            if (index === 0 && productions.length === 0 && Math.random() > 0.5) {
                production = terminals[Math.floor(Math.random() * terminals.length)];
            }

            productions.push(production);
        }

        grammar[nonTerminal] = productions;
    });

    return grammar;
}
module.exports={generateRandomRLG};