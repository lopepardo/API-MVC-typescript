import { BasicOrder, Order, ProductOrderModel } from "../entities/order";
import { ErrorHandler } from "../../middlewares";
import { StatusCodes } from "http-status-codes";
import { CustomerModel } from "../entities/customer";
import { ProductModel } from "../entities/product";

interface IOrderRepository {
  getAllOrders: () => Promise<Order[]>;
  getOrderbyId: (orderId: number) => Promise<Order>;
  createOrder: (order: BasicOrder) => Promise<void>;
  updateOrder: (order: Order) => Promise<void>;
}

class OrderRepository implements IOrderRepository {
  public getAllOrders = async (): Promise<Order[]> => {
    const orders: Order[] = await ProductOrderModel.findAll({
      attributes: ["orderId", "productQuantity"],
      include: [
        {
          model: CustomerModel,
          as: "customer",
          attributes: ["id", "name", "email"],
        },
        {
          model: ProductModel,
          as: "product",
          attributes: ["id", "name", "description", "instockQuantity", "price"],
        },
      ],
    });

    if (orders.length === 0) {
      throw new ErrorHandler(StatusCodes.NOT_FOUND, "No orders found");
    }

    return orders;
  };

  public getOrderbyId = async (orderId: number): Promise<Order> => {
    const order: Order | null = await ProductOrderModel.findOne({
      where: { orderId },
      attributes: ["orderId", "productQuantity"],
      include: [
        {
          model: CustomerModel,
          as: "customer",
          attributes: ["id", "name", "email"],
        },
        {
          model: ProductModel,
          as: "product",
          attributes: ["id", "name", "description", "instockQuantity", "price"],
        },
      ],
    });

    if (!order) {
      throw new ErrorHandler(StatusCodes.NOT_FOUND, "Order not found");
    }

    return order;
  };

  public createOrder = async (order: BasicOrder): Promise<void> => {
    await ProductOrderModel.create(
      {
        product_id: order.product.id,
        customer_id: order.customer.id,
        product_quantity: order.productQuantity,
      },
      { fields: ["product_id", "customer_id", "product_quantity"] }
    );
  };

  public updateOrder = async (order: Order): Promise<void> => {
    await ProductOrderModel.update(
      {
        product_id: order.product.id,
        customer_id: order.customer.id,
        product_quantity: order.productQuantity,
      },
      { where: { order_id: order.orderId } }
    );
  };
}

export { OrderRepository };
