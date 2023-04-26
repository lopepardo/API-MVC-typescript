import { Product } from "../data/entities/product";
import { ProductRepository } from "../data/repositories/productRepository";

export class ProductService {
  private readonly productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  getAllProducts = async (): Promise<Product[]> => {
    const products = await this.productRepository.getAll();
    return products;
  };

  getProductById = async (id: string): Promise<Product> => {
    const product = await this.productRepository.getById(id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  };

  createProduct = async (newProduct: Product): Promise<Product> => {
    const createdProduct = await this.productRepository.create(newProduct);
    return createdProduct;
  };

  updateProduct = async (
    id: string,
    updatedProductData: Product
  ): Promise<Product> => {
    const existingProduct = await this.getProductById(id);
    const updatedProduct: Product = {
      ...existingProduct,
      ...updatedProductData,
      id,
    };
    const savedProduct = await this.productRepository.update(updatedProduct);
    return savedProduct;
  };

  deleteProduct = async (id: string): Promise<Product> => {
    const existingProduct = await this.getProductById(id);
    const deletedProduct = await this.productRepository.delete(existingProduct);
    return deletedProduct;
  };
}
