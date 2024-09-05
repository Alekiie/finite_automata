const {generateWordsFromGrammar} = require('../utils/generateWords')

const generatedWords =(req,res)=>{
    const words = generateWordsFromGrammar();
   res.status(200).json(words);
}
module.exports = {generatedWords};