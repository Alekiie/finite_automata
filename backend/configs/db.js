const mongoose = require('mongoose');

require('dotenv').config();

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log(`Connected to MongoDb...`);
        })
        .catch((err)=>{
            console.log(`There was an error: ${err.message}`);
        });
}

module.exports = { connectDb }