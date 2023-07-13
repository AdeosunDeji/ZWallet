import { Router } from "express";
import userRoutes from "./userRoutes";
import paymentRoutes from "./paymentRoute";


const router = Router();

router.use("/users", userRoutes);
router.use("/payment", paymentRoutes);


export default router;
