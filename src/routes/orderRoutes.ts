import { Router } from "express";

// ------------------ Import Controllers ------------------
import { OrderController } from "../controllers/orderController";

const router = Router();

const orderController = new OrderController();

// GET /orders -> Get all orders
router.get("/", orderController.getOrdersHandler);

// GET /orders/:id -> Get order by id
router.get("/:id", orderController.getOrderByIdHandler);

// POST /orders -> Create a new order
router.post("/", orderController.createOrderHandler);

// PUT /orders/:id -> Update order by id
router.put("/:id", orderController.updateOrderHandler);

export { router as orderRoutes };
