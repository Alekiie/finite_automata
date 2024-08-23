const bcrypt = require("bcrypt");
const Users = require("../models/UserModel");

const registerController = async (req, res) => {
    const { firstName, lastName, email, role = 'student', password } = req.body;

    // Validate input data (you can add more validations as needed)
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create a new user
        const user = await Users.create({
            firstName,
            lastName,
            email,
            role,
            password: hashedPassword,
        });

        // Respond with success message
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        // Respond with error message
        res.status(500).json({ message: error.message });
    }
}

module.exports = { registerController };
