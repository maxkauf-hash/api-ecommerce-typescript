export interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  quantity: number;
  creationTimestamp?: Date;
}

export interface Orders {
  id: number;
  user_id: number;
  totalAmount: number;
  creationTimestamp?: Date;
  status: string;
}
