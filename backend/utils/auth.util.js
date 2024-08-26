// utils/authUtils.js
const jwt = require("jsonwebtoken");
const Users = require("../models/UserModel");

const authenticateUser = async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return { status: 401, json: { message: "Unauthorized: No token provided" } };
    }

    const token = authHeader.split(" ")[1];

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Find the user associated with the decoded token
        const user = await Users.findById(decoded.id);

        if (!user) {
            return { status: 404, json: { message: "User not found" } };
        }

        // Return the authenticated user
        return { user };
    } catch (error) {
        console.error("Error authenticating user:", error);
        return { status: 500, json: { message: "Authentication error" } };
    }
};

module.exports = authenticateUser;
