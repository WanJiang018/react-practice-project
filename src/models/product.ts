export interface Product {
  id: string;
  img: string;
  price: number;
  title: string;
}

export interface CartProduct extends Product {
  qty: number;
}

export interface UpdateQtyPayload {
  id: string;
  qty: number;
}
