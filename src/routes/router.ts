import express from "express";
import { productRoutes } from "./productRoutes";

const router = express.Router();

router.use("/products", productRoutes);

// router.use("/orders", orderRoutes);

export default router;
