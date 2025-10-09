import dotenv from "dotenv";
dotenv.config();

import express from "express";
import prisma from "./config/db.js";
import departmentRoutes from "./routes/department.routes.js";
import authRoutes from "./routes/auth.routes.js";
import clearanceRequestRoutes from "./routes/clearanceRequest.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/departments", departmentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/clearance", clearanceRequestRoutes);

app.get("/test-db", async (req, res) => {
  try {
    const result = await prisma.$queryRaw<{ now: Date }[]>`SELECT NOW() AS now`;

    if (!result[0]) {
      return res
        .status(500)
        .json({ success: false, error: "No result from database" });
    }

    res.json({ success: true, time: result[0].now });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is running. Welcome to Clearance Portal API!");
});

async function startServer() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log(" Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" Failed to connect to the database:", err);
    process.exit(1);
  }
}

startServer();
