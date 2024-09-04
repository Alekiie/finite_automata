function checkWord(word, nonTerminal = "S", grammar) {
    if (!grammar[nonTerminal]) return false;

    // If the word is empty and there's an epsilon (empty string) production
    if (word.length === 0) {
        return grammar[nonTerminal].includes("");
    }

    for (const production of grammar[nonTerminal]) {
        if (production === "") continue; // Skip empty production

        // If the production is longer than the word, skip it
        if (production.length > word.length) continue;

        let matches = true;
        let index = 0;

        // Check each symbol in the production
        for (let i = 0; i < production.length; i++) {
            const symbol = production[i];

            if (grammar[symbol]) {
                // If symbol is a non-terminal, recursively check the remaining word
                if (checkWord(word.substring(index), symbol, grammar)) {
                    return true;
                } else {
                    matches = false;
                    break;
                }
            } else if (word[index] === symbol) {
                // If symbol is a terminal, advance to the next character in the word
                index++;
            } else {
                matches = false;
                break;
            }
        }

        // If the entire production matches the word
        if (matches && index === word.length) {
            return true;
        }
    }

    return false;
}


module.exports = {
    checkWord,
};
