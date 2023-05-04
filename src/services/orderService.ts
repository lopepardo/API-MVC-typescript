import { Order } from "../data/entities/order";
import { Product } from "../data/entities/product";

// TODO: implement any use cases for orders
class OrderService {
  // TODO Method to process an order
  static processOrder = async (
    order: Order,
    products: Product[]
  ): Promise<void> => {
    // Ex. Logic to check stock
    // Ex. Apply discounts and taxes
    // Ex. process shipping
    // Ex. send email to customer
  };

  // TODO Method to cancel an order
  static cancelOrder = async (order: Order): Promise<void> => {};

  // TODO Method to return an order
  static returnOrder = async (order: Order): Promise<void> => {};
}

export { OrderService };
