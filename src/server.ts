import dotenv from "dotenv";
dotenv.config();

import express from "express";
import prisma from "./config/db.js";
import routes from "./routes/index.js";
import logger from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
  res.send(" Server is running. Welcome to the Clearance Portal API!");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await prisma.$queryRaw<{ now: Date }[]>`SELECT NOW() AS now`;

    if (!result.length) {
      logger.error("Database query returned no results");
      return res
        .status(500)
        .json({ success: false, error: "No result from database" });
    }

    logger.info("Database connection verified successfully");
    res.json({ success: true, time: result[0]?.now });
  } catch (error: any) {
    logger.error(`Database connection error: ${error.message}`);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

async function startServer() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    logger.info(" Database connected successfully");

    app.listen(PORT, () => {
      logger.info(`Server running at http://localhost:${PORT}`);
    });
  } catch (err: any) {
    logger.error(` Failed to connect to the database: ${err.message}`);
    process.exit(1);
  }
}

startServer();
