import express, { json, urlencoded, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes";

dotenv.config();

const app = express();

//Middleware
const corsOptions = {
  origin: ["http://localhost:3001"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(json({ limit: "100mb" }));
app.use(urlencoded({ limit: "100mb", extended: true }));

//Routes
// app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

//Listen app
const PORT = process.env.PORT || 7001;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
