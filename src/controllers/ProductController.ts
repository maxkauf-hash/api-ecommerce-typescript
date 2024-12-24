import { Request, Response } from "express";
import { CrudModel } from "../models/CrudModel";
import { Products } from "../types";

const productModel = new CrudModel<Products>("products");

export class ProductController {
  static async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await productModel.findAll();

      if (products.length === 0) {
        res.status(404).json({ message: "No products found" });
        return;
      }
      res.status(200).json(products);
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }

  static async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const product = await productModel.findOne(id);

      if (!product) {
        res.status(404).json({ message: "No product found" });
      }

      res.status(200).json(product);
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }

  static async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const response = await productModel.create(req.body);

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }

  static async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const response = await productModel.update(id, req.body);

      res.status(200).json(response);
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }

  static async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const response = await productModel.delete(id);

      res.status(202).json(response);
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }
}
