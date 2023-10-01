import { createContext } from "react";
import { ProductState, initState } from "../reducers/productReducers";

const initCartContext: [ProductState, (payload?: any) => any] = [
  initState,
  () => {},
];

export const CartContext = createContext(initCartContext);
