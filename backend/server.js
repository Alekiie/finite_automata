const express = require("express");
const cors = require("cors");
const app = express();
const register = require("./routes/register");
const login = require("./routes/login");
const users = require("./routes/users");
const modules=require('./routes/modules')
const {connectDb} = require('./configs/db');
const dotenv = require("dotenv");
dotenv.config();

/*MIDDLEWARES*/
app.use(cors());

/*ALL ROUTES*/
app.use('/register', register);
app.use('/login', login);
app.use('/users', users);
app.use('/modules',modules)

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// connect to database
connectDb();


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
