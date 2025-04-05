import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { loginRouter } from "./routes/loginRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Route d'authentification
app.use("/login", loginRouter);

// Serveur
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Auth service running on http://localhost:${PORT}`);
});

export default app;
