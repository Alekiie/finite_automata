function checkWord(word, nonTerminal = "S", grammar) {
    if (!grammar[nonTerminal]) return false;

    // If the word is empty and there's an epsilon (empty string) production
    if (word.length === 0) {
        return grammar[nonTerminal].includes("");
    }

    for (const production of grammar[nonTerminal]) {
        if (production === "") continue; // Skip empty production

        // Separate terminal and the rest of the production
        const terminal = production[0];
        const remainingProduction = production.substring(1);

        if (word.startsWith(terminal)) {
            // If the remaining production is empty, check the rest of the word
            if (remainingProduction.length === 0 && word.length === 1) {
                return true;
            } else if (remainingProduction.length === 0) {
                // If no non-terminal remains, proceed with the rest of the word
                if (checkWord(word.substring(1), nonTerminal, grammar)) {
                    return true;
                }
            } else {
                // Recursively check the remaining word with the next non-terminal
                if (checkWord(word.substring(1), remainingProduction, grammar)) {
                    return true;
                }
            }
        }
    }

    return false;
}

module.exports = {
    checkWord,
};
