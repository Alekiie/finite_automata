const { generateRandomRLG } = require('./automata');

function generateWordsFromGrammar(startSymbol, maxLength) {
    // Generate the grammar
    const grammar = generateRandomRLG();
    console.log("***Generated Grammar***:\n");
    console.log(grammar);

    // Helper function to check if the string contains only terminal symbols
    function isTerminal(str, grammar) {
        const nonTerminals = Object.keys(grammar);
        return !nonTerminals.some(nonTerminal => str.includes(nonTerminal));
    }

    // Main function to generate words
    function generateWords(grammar, startSymbol, maxLength) {
        const queue = [startSymbol];
        const results = new Set();

        while (queue.length > 0) {
            const current = queue.shift();
            
            if (current.length > maxLength) continue;

            // If the current string is a terminal string, add it to results
            if (isTerminal(current, grammar)) {
                results.add(current);
                continue;
            }

            // Replace non-terminal symbols with their productions
            const nonTerminals = Object.keys(grammar);
            let replaced = false;
            for (const nonTerminal of nonTerminals) {
                const regex = new RegExp(nonTerminal, 'g');
                if (regex.test(current)) {
                    const productions = grammar[nonTerminal];
                    for (const production of productions) {
                        const newString = current.replace(regex, production);
                        if (newString !== current) {
                            queue.push(newString);
                            replaced = true;
                        }
                    }
                }
            }

            if (!replaced && !isTerminal(current, grammar)) {
                results.add(current);
            }
        }

        return Array.from(results);
    }

    // Generate and return the words from the generated grammar
    return generateWords(grammar, 'S', maxLength);
}



module.exports = { generateWordsFromGrammar };
