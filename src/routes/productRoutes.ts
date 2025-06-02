import express, { Request, Response, NextFunction } from "express";
import Product from "../models/Product";

const router = express.Router(); 


router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});


router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

export default router;
