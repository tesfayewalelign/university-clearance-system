import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes.js";
import clearanceRequestRoutes from "./routes/clearanceRequest.routes.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/clearance-requests", clearanceRequestRoutes);

app.get("/", (req, res) => res.send("API is running"));

export default app;
