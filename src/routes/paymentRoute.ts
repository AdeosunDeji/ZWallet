import { Router } from "express";
import path from "path";
import PaymentController from "../controllers/payment";

const router = Router();
const { response, walletBalance } = PaymentController;


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/response", response);
router.get("/wallet/:userId/balance", walletBalance);



export default router;
