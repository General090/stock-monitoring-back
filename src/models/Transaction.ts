import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    type: {
      type: String,
      enum: ["IN", "OUT"], // IN = stock added, OUT = stock sold/removed
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    processedBy: {
      type: String, // Or use mongoose.Schema.Types.ObjectId if you have a User model
    },
  },
  { timestamps: true }
);

export default mongoose.model("Transaction", transactionSchema);
