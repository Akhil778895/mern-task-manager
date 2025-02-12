const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// <-----> Home Route <------->
const home = async (req, res) => {
    try {
        res.status(200).send("Home Page");    
    } catch (error) {
        res.status(400).send({ msg: "Page not found" });
    }
};

// <-----> Register Route <------->
const register = async (req, res) => {
    try {
        console.log("Request body received:", req.body);

        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = new User({ name, email, phone, password });

        console.log("Prepared user object for saving:", newUser);

        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });

    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: error.message });
    }
};


// <-----> Login Route <------->
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const validUser = await User.findOne({ email });

        if (!validUser) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, validUser.password);

        if (isPasswordValid) {
            res.status(200).json({
                message: "Login Successful",
                token: await generateToken(validUser._id),
                userId: validUser._id.toString(),
            });
        } else {
            res.status(400).json({ message: "Incorrect Password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error!!" });
    }
};

// <-----> Helper Function to Generate Token <------->
const generateToken = async (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || "default_secret", {
        expiresIn: "1d",
    });
};

module.exports = { home, register, login };