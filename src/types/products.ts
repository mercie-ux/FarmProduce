import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string | StaticImageData;
  category: string;
  unit: string;
  description: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}