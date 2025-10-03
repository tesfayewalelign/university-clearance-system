import express from "express";
import pool from "./config/db.js";

const app = express();
const PORT = 3000;

app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() as now");
    res.json({ success: true, time: (rows as any)[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
