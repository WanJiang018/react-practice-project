import { Product, UpdateQtyPayload } from "../models/product";

export enum ProductActionType {
  ADD = "@product/ADD",
  REMOVE = "@product/REMOVE",
  UPDATE_QTY = "@product/UPDATE_QTY",
}
export const addAction = (payload: Product) => ({
  type: ProductActionType.ADD,
  payload,
});
export const removeAction = (payload: string) => ({
  type: ProductActionType.REMOVE,
  payload,
});
export const updateQtyAction = (payload: UpdateQtyPayload) => ({
  type: ProductActionType.UPDATE_QTY,
  payload,
});
