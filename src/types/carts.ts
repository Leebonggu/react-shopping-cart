import { Product } from './products';

export type Cart = {
  id: number;
  product: Product;
};

export type CartList = Cart[];

export type ProductWithQuantity = Product & { quantity: number };

export type ProductWithQuantityAndChecked = ProductWithQuantity & { checked: boolean };

export type CartWithProductQuantity = {
  id: number;
  product: ProductWithQuantity;
};

export type CartWithQuantityAndChecked = {
  id: number;
  product: ProductWithQuantityAndChecked;
};
