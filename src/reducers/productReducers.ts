import { ProductActionType } from "./productActions";
import { CartProduct } from "../models/product";
import { add, remove, updateQty } from "../services/productService";

export interface ProductState {
  cartList: CartProduct[];
}

export const initState: ProductState = { cartList: [] };

export function productReducer(state: ProductState, action: any): ProductState {
  switch (action.type) {
    case ProductActionType.ADD:
      return add(state, action.payload);
    case ProductActionType.REMOVE:
      return remove(state, action.payload);
    case ProductActionType.UPDATE_QTY:
      return updateQty(state, action.payload);
    default:
      return state;
  }
}
