import { Router, Request, Response } from "express";
import { OrderController } from "../controllers/orderController";

const router = Router();

const orderController = new OrderController();

router.get("/", (_req: Request, res: Response) => {
  const orders = orderController.getAllOrders();
  res.status(200).json(orders);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const order = orderController.getOrderById(id);
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).send(`Order with id ${id} not found`);
  }
});

router.post("/", (req: Request, res: Response) => {
  const order = orderController.createOrder(req.body);
  res.status(201).json(order);
});

router.put("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const order = orderController.updateOrder(id, req.body);
  res.status(200).json(order);
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  orderController.deleteOrder(id);
  res.sendStatus(204);
});

export { router };
