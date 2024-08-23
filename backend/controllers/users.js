const Users = require("../models/UserModel");


const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({ users });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "No Users found", error: error.message });
    }
}

module.exports = { getAllUsers }