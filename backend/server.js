import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import apiRoutes from "./routes/auth-routes.js";
import { connectDB } from "./lib/db.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json())
app.use(cookieParser());

app.use("/api/auth", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} `);
  connectDB();
});
