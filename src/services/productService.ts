import { Product, UpdateQtyPayload } from "../models/product";
import { ProductState } from "../reducers/productReducers";

export function add(state: ProductState, payload: Product): ProductState {
  const cartList = [...state.cartList];
  const index = cartList.findIndex((item) => payload.id === item.id);
  if (index === -1) {
    cartList.push({ ...payload, qty: 1 });
  } else {
    cartList[index].qty += 1;
  }
  return { ...state, cartList };
}

export function remove(state: ProductState, payload: string): ProductState {
  const cartList = state.cartList.filter((item) => item.id !== payload);
  return { ...state, cartList };
}

export function updateQty(
  state: ProductState,
  payload: UpdateQtyPayload
): ProductState {
  const cartList = [...state.cartList];
  const index = state.cartList.findIndex((item) => payload.id === item.id);
  if (index !== -1) {
    cartList[index].qty += payload.qty;
  }
  return { ...state, cartList };
}
