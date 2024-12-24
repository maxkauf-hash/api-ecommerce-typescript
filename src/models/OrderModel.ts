import { CrudModel } from "../models/CrudModel";
import { Orders } from "../types";

export class OrderModel extends CrudModel<Orders> {
  constructor() {
    super("orders"); // Spécifiez la table associée
  }

  // Exemple de méthode spécifique pour trouver les commandes par utilisateur
  async findByUserId(userId: number): Promise<Orders[] | null> {
    try {
      const orders = await CrudModel.getDb().query.findMany({
        where: { userId },
      });
      return orders.length > 0 ? orders : null;
    } catch (error) {
      throw new Error("Error fetching orders by user ID");
    }
  }
}
