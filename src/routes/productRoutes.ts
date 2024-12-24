import { Router } from "express";
import { ProductController } from "../controllers/ProductController";

const router = Router();

router.get("/", ProductController.getAllProducts);

router.get("/:id", ProductController.getProductById);

router.post("/create", ProductController.createProduct);

export default router;
