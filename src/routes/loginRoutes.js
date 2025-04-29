import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Charger les variables d'environnement depuis .env

const router = express.Router();

// Fake user data (remplacer par une vraie vérification en production)
const fakeUser = {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD,
  };

// Login route
router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (email === fakeUser.email && password === fakeUser.password) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({ token, message: "Login Succeed"  });
  }

  return res.status(401).json({ message: "Invalid email or password." });
});

export { router as loginRouter };
