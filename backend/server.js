const express = require("express");
const cors = require("cors");
const app = express();
const register = require("./routes/register");
const login = require("./routes/login");
const users = require("./routes/users");
const modules=require('./routes/modules')
const enrollToModule = require("./routes/enrollTomodule");
const instructors = require('./routes/instructors')
const stats = require('./routes/stats')
const  viewModule =require('./routes/viewModule')
const {connectDb} = require('./configs/db');
const dotenv = require("dotenv");

dotenv.config();

/*MIDDLEWARES*/
app.use(cors());
app.use(express.json())

/*ALL ROUTES*/
app.use('/register', register);
app.use('/login', login);
app.use('/users', users);
app.use('/modules',modules)
app.use("/enroll", enrollToModule);
app.use('/instructors',instructors)
app.use('/stats',stats)
app.use('/module/:moduleId',viewModule)
app.get("/", (req, res) => {
  res.send("Hello World!");
});



// connect to database
connectDb();


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
