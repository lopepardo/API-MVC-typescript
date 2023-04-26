import { Request, Response } from "express";
import { ProductService } from "../services/productService";

export class ProductController {
  private readonly productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getAllProducts = async (req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    res.json(products);
  };

  getProductById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const product = await this.productService.getProductById(id);
    res.json(product);
  };

  createProduct = async (req: Request, res: Response) => {
    const productData = req.body;
    const createdProduct = await this.productService.createProduct(productData);
    res.json(createdProduct);
  };

  updateProduct = async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedProductData = req.body;
    const updatedProduct = await this.productService.updateProduct(
      id,
      updatedProductData
    );
    res.json(updatedProduct);
  };

  async deleteProduct(req: Request, res: Response) {
    const id = req.params.id;
    const deletedProduct = await this.productService.deleteProduct(id);
    res.json(deletedProduct);
  }
}
