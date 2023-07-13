import { Schema, model } from "mongoose";
import { IWalletTransac } from "../utils/interface";

const walletTransactionSchema = new Schema(
  {
    // Even though user can be implied from wallet, let us
    // double save it for security
    userId: { type: String, ref: "User", required: true },
    amount: { type: Number, default: 0 },
    isInflow: { type: Boolean },
    paymentMethod: { type: String, default: "flutterwave" },

    currency: {
      type: String,
      required: [true, "currency is required"],
      enum: ["NGN", "USD", "EUR", "GBP"],
    },

    status: {
      type: String,
      required: [true, "payment status is required"],
      enum: ["successful", "pending", "failed"],
    },
  },

  { timestamps: true }
);

export default model<IWalletTransac>("WalletTransc", walletTransactionSchema);
