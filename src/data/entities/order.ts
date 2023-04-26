import { Product } from "./product";

interface Order {
  id: string;
  products: Product[];
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

export { Order };
