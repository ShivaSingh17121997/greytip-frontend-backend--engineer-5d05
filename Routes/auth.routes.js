// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("../Model/model.auth");

// const authRouter = express.Router();

// // Secret key for JWT (in a real application, store this securely)
// const JWT_SECRET = "hlw";

// // Signup endpoint
// authRouter.post("/signup", async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password are required" });
//     }

//     try {
//         // Check if the user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(409).json({ message: "User already exists" });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Store user
//         const user = new User({ email, password: hashedPassword });
//         await user.save();

//         res.status(201).json({ message: "User created successfully", user });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// // Login endpoint
// authRouter.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         return res.status(400).json({ message: "Email and password are required" });
//     }

//     try {
//         // Find user
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//         // Check password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//         // Generate JWT
//         const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

//         res.status(200).json({ message: "Login successful", token });
//     } catch (error) {
//         res.status(500).json({ message: "Internal server error" });
//     }
// });
// module.exports = authRouter;
