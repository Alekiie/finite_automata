function checkWord(word, nonTerminal = "S", grammar, depth = 0, maxDepth = 100) {
    // Prevent infinite recursion by adding a maximum depth
    if (depth > maxDepth) {
        return false;
    }

    // Check if the non-terminal exists in the grammar
    if (!grammar[nonTerminal]) return false;

    // Base case: If the word is empty and the grammar allows epsilon (empty string) production
    if (word.length === 0) {
        return grammar[nonTerminal].includes("");
    }

    // Iterate through each production rule of the non-terminal
    for (const production of grammar[nonTerminal]) {
        if (production === "") continue; // Skip empty production

        // If the production is longer than the remaining word, skip it
        if (production.length > word.length) continue;

        let matches = true;
        let index = 0;

        // Check each symbol in the production
        for (let i = 0; i < production.length; i++) {
            const symbol = production[i];

            // Ensure that 'S' is not used as a non-terminal in the right-hand side
            if (symbol === "S") {
                matches = false;
                break;
            }

            if (grammar[symbol] && symbol !== "S") {
                // If symbol is a non-terminal other than 'S', recursively check the remaining word
                const remainingWord = word.substring(index);
                if (checkWord(remainingWord, symbol, grammar, depth + 1, maxDepth)) {
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

        // If the entire production matches the word, return true
        if (matches && index === word.length) {
            return true;
        }
    }

    // If no production matches, return false
    return false;
}

module.exports = {
    checkWord,
};
