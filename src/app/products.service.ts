import { Injectable } from '@angular/core';
import productsData from '../assets/data/products.json';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = productsData;

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product: Product) => product.id === id);
  }
}