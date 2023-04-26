import { Order } from "../entities/order";

class OrderRepository {
  private orders: Order[];

  constructor() {
    this.orders = [];
  }

  create(order: Order): Order {
    this.orders.push(order);
    return order;
  }

  getById(id: string): Order | undefined {
    return this.orders.find((order) => order.id === id);
  }

  update(order: Order): Order {
    const index = this.orders.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      this.orders[index] = order;
      return order;
    }
    throw new Error("Order not found");
  }

  delete(id: string): void {
    const index = this.orders.findIndex((order) => order.id === id);
    if (index !== -1) {
      this.orders.splice(index, 1);
    } else {
      throw new Error("Order not found");
    }
  }
}

export { OrderRepository };
