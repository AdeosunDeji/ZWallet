import models from "../models"


export const validateUserWallet = async (userId: string) => {
  try {
    const userWallet = await models.Wallet.findOne({ userId });

    if (!userWallet) {
      const wallet = await models.Wallet.create({
        userId,
      });
      return wallet;
    }
    return userWallet;
  } catch (error) {
    console.log(error);
  }
}

export const createWalletTransaction = async (userId: string, status: string, currency: string, amount: number) => {
  try {
    const walletTransaction = await models.walletTransac.create({
      amount,
      userId,
      isinflow: true,
      currency,
      status
    });
    return walletTransaction;
  } catch (error) {
    console.log(error)
  }
};

//create Transaction
export const createTransaction = async (
  userId: string,
  id: string,
  status: string,
  currency: string,
  amount: number,
  customer: string,
) => {
  try {
    const customer = {
      email: "adeosundeji@gmail.com",
      phone: "08088098622",
      name: "Mike jordan",
    }


    const transaction = await models.Transactions.create({
      userId,
      transactionId: id,
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      amount,
      currency,
      paymentStatus: status,
      paymentGateway: "fluterwave",
    });
    return transaction;
  } catch (error) {
    console.log(error);
  }
}

export const updateWallet = async (userId: string, amount: number) => {
  try {
    const wallet = await models.Wallet.findByIdAndUpdate(
      { userId },
      { $inc: { balance: amount } },
      { new: true }
    )
    return wallet;
  } catch (error) {
    console.log(error);
  }
}

