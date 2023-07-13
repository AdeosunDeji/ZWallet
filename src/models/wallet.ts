import { Schema, model } from "mongoose";
import { IWallet } from "../utils/interface";

const walletSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    balance: { type: Number, default: 0 },
  },

  { timestamps: true }
);

export default model<IWallet>("Wallet", walletSchema);
