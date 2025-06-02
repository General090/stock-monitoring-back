import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes";
import receiptRoutes from "./routes/receiptRoutes";
import authRoutes from "./routes/authRoutes";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" })); // allow frontend origin


app.use("/api/products", productRoutes);
app.use("/api/receipts", receiptRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
