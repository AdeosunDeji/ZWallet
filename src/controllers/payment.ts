import axios from "axios";
import { Request, Response } from "express"
import { models } from "mongoose";
import { createTransaction, createWalletTransaction, updateWallet, validateUserWallet } from "../middlewares/payment";
import { successResponse } from "../utils/responses";


export default class PaymentController {

  static async response(req: Request, res: Response) {
    const { transaction_id } = req.query;
    const url = `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`;

    const responses = await axios({
      url,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${"FLWSECK_TEST-eaaf37465cc3292d60b60e05d60fe194-X"}`
      }
    });


    const { status, currency, id, amount, customer } = responses.data.data;

    const user = await models.User.findOne({ email: customer.email });

    const wallet = await validateUserWallet(user.id);
    await createWalletTransaction(user.id, status, currency, amount);

    await createTransaction(user.id, id, status, currency, amount, customer);

    const transactionExist = await models.Transaction.findOne({ transactionId: id });

    if (transactionExist) {
      return res.status(409).send("Transaction Already Exist");
    }


    await updateWallet(user._id, amount);

    return successResponse(res, 200, "Wallet funded successfully", { data: wallet })
  }


  static async walletBalance(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      const wallet = await models.Wallet.findOne({ userId });
      return successResponse(res, 200, "Balance:", wallet.Balance)
    } catch (error) {
      console.log(error);
    }
  }
}