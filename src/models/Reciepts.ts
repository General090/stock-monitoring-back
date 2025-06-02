import { Schema, model } from "mongoose";

const receiptSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true }
}, { timestamps: true });

export default model("Receipt", receiptSchema);
