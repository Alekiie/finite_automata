const { generateWordsFromGrammar } = require('../utils/generateWords');

const generatedWords = (req, res) => {
    const { grammar, startSymbol, maxLength } = req.body;

    if (!grammar || !startSymbol || !maxLength) {
        return res.status(400).json({ message: "Missing required parameters." });
    }

    try {
        const words = generateWordsFromGrammar(grammar, startSymbol, maxLength);
        res.status(200).json(words);
    } catch (error) {
        res.status(500).json({ message: "Error generating words", error: error.message });
    }
};

module.exports = { generatedWords };
