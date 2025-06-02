import express from "express";
import Receipt from "../models/Reciepts";


const router = express.Router();

router.get("/", async (_, res) => {
  const receipts = await Receipt.find().populate("productId");
  res.json(receipts);
});

router.post("/", async (req, res) => {
  const receipt = await Receipt.create(req.body);
  res.status(201).json(receipt);
});

export default router;
