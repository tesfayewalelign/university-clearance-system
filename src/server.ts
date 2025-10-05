import dotenv from "dotenv";
dotenv.config(); // Load .env variables at the very top

import express from "express";
import prisma from "./config/db.js"; // Prisma client
import departmentRoutes from "./routes/department.routes.js"; // Your department routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/departments", departmentRoutes);

// Test DB connection route
app.get("/test-db", async (req, res) => {
  try {
    // Using Prisma to run a raw SQL query
    const result = await prisma.$queryRaw`SELECT NOW() AS now`;
    res.json({ success: true, time: result[0].now });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("✅ Server is running. Welcome to Clearance Portal API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
