import { Product } from "../entities/product";

export interface IRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | undefined>;
  create(product: T): Promise<T>;
  update(product: T): Promise<T>;
  delete(product: T): Promise<Product>;
}

export class ProductRepository implements IRepository<Product> {
  private readonly products: Product[];

  constructor() {
    this.products = [
      { id: "1", name: "Product 1", description: "Description 1", price: 10 },
      { id: "2", name: "Product 2", description: "Description 2", price: 20 },
      { id: "3", name: "Product 3", description: "Description 3", price: 30 },
      { id: "4", name: "Product 4", description: "Description 4", price: 30 },
    ];
  }

  getAll = async (): Promise<Product[]> => {
    return this.products;
  };

  getById = async (id: string): Promise<Product | undefined> => {
    const product = this.products.find((p) => p.id === id);
    return product;
  };

  create = async (product: Product): Promise<Product> => {
    this.products.push(product);
    return product;
  };

  update = async (product: Product): Promise<Product> => {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index === -1) {
      throw new Error(`Product with id ${product.id} not found`);
    }
    this.products[index] = product;
    return product;
  };

  delete = async (product: Product): Promise<Product> => {
    const index = this.products.findIndex((p) => p.id === product.id);
    if (index === -1) {
      throw new Error(`Product with id ${product.id} not found`);
    }
    this.products.splice(index, 1);
    return product;
  };
}
