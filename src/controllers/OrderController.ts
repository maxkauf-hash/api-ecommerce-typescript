import { Request, Response } from "express";
import { CrudModel } from "../models/CrudModel";
import { Orders } from "../types";

const orderModel = new CrudModel<Orders>("orders");

export class ProductController {
  static async getAllOrders(req: Request, res: Response): Promise<void> {
    try {
      const products = await orderModel.findAll();

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

  static async getOrderById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const product = await orderModel.findOne(id);

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

  static async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const response = await orderModel.create(req.body);

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }

  static async updateOrder(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const response = await orderModel.update(id, req.body);

      res.status(200).json(response);
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }

  static async deleteOrder(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const response = await orderModel.delete(id);

      res.status(202).json(response);
      return;
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  }
}
