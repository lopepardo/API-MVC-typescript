import express from "express";

// ------------------ Import Routes ------------------
import { orderRoutes } from "./orderRoutes";
// ------------------ Import Controllers ------------------
import { endpointTest } from "../controllers/api";

const router = express.Router();

// GET /api/login -> Generate JWT Access Token
// router.get("/login", validateBodyRequest(loginSchema), generateJWTAccess);

// GET /api/ -> Endpoint example with auth middleware
router.get("/", endpointTest);

// Routes for products
// router.use("/products", productRoutes);

// Routes for customers
// router.use("/customers", customerRoutes);

// Routes for orders
router.use("/orders", orderRoutes);

export default router;
