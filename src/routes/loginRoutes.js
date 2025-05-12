import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const fakeUser = {
  email: process.env.USER_EMAIL,
  password: process.env.USER_PASSWORD,
};

// POST : http://localhost:4000/login
// {
//   "email": "mail@gmail.com",
//   "password": "password"
// }
router.post("/", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "❌ Email and password are required" });
    }

    if (email === fakeUser.email && password === fakeUser.password) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({
        message: "✅ Login succeeded",
        token,
      });
    }

    return res.status(401).json({ message: "❌ Invalid email or password" });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error during login" });
  }
});

export { router as loginRouter };
