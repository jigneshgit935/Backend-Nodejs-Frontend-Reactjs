import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/auth-routes.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} `);
});
