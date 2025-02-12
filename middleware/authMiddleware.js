const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to verify JWT token
const authenticate = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({ message: "Access Denied. No token provided." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "Access Denied. Invalid token." });
        }

        req.user = user;  // Attach user data to request object
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token.", error: error.message });
    }
};

module.exports = authenticate;
