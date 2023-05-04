import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

// ------------------ Import Repositories ------------------
import { OrderRepository } from "../data/repositories/orderRepository";
// ------------------ Import Entities ------------------
import { BasicOrder, Order } from "../data/entities/order";
import { OrderService } from "../services/orderService";

class OrderController {
  private readonly orderModel: OrderRepository;
  private readonly orderService: OrderService;

  constructor() {
    this.orderModel = new OrderRepository();
    this.orderService = new OrderService();
  }

  getOrdersHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const orders = await this.orderModel.getAllOrders();
      res.status(StatusCodes.OK).json({ data: orders });
    } catch (error) {
      console.log("Error in getOrdersHandler: ", error);
      next(error);
    }
  };

  getOrderByIdHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const orderId = Number(req.params.id);
      const order = await this.orderModel.getOrderbyId(orderId);
      res.status(StatusCodes.OK).json({ data: order });
    } catch (error) {
      console.log("Error in getOrderByIdHandler: ", error);
      next(error);
    }
  };

  createOrderHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const newOrder: BasicOrder = req.body;

      await this.orderModel.createOrder(newOrder);
      res.status(StatusCodes.CREATED).send();
    } catch (error) {
      console.log("Error in createOrderHandler: ", error);
      next(error);
    }
  };

  updateOrderHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const order: Order = req.body;
      await this.orderModel.updateOrder(order);
      res.status(StatusCodes.OK).send();
    } catch (error) {
      console.log("Error in updateOrderHandler: ", error);
      next(error);
    }
  };
}

export { OrderController };
