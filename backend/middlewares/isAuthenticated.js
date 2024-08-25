const jwt = require("jsonwebtoken");
const Users = require("../models/UserModel");
require('dotenv').config();

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        // Check if the Authorization header is present
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1];

        // Decode and verify the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Find the user associated with the decoded token
        const user = await Users.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Ensure the returned user has a role of instructor

        if (user.role !== 'instructor') {
            return res.status(403).json({ message: "Forbidden: Only instructors can perform this action" });
        }

        req.user = user; // Attach the user to the request object
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authenticate;
