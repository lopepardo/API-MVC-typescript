import { Order } from "../data/entities/order";
import { Product } from "../data/entities/product";

class OrderService {
  // Método para procesar una orden
  static processOrder(order: Order, products: Product[]): Order {
    // Lógica para verificar el stock, aplicar descuentos e impuestos, y procesar el envío (todavía no implementada)
    order.status = "confirmed";

    return order;
  }
}

export { OrderService };
