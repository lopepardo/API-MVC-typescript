import express from "express";
// ------------------ Import Routes ------------------
import { productRoutes } from "./productRoutes";
// ------------------ Import Controllers ------------------
import { endpointTest } from "../controllers/api";

const router = express.Router();

// GET /api/login -> Generate JWT Access Token
// router.get("/login", validateBodyRequest(loginSchema), generateJWTAccess);

// GET /api/ -> Endpoint example with auth middleware
router.get("/", endpointTest);

// GET /api/products -> Endpoint example
router.use("/products", productRoutes);

export default router;
