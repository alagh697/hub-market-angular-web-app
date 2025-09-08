export interface Product {
  id: number;
  title: string;
  description?: string
  price: number;
  stock: number;
  category: string;
  liked: boolean;
  image?: string;
}
