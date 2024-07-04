import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model'; // Asegúrate de importar el modelo de Producto si lo tienes definido

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
    this.cartSubject.next(this.items);
  }

  removeFromCart(index: number) {
    this.items.splice(index, 1);
    this.cartSubject.next(this.items);
  }

  updateQuantity(index: number, newQuantity: number) {
    this.items[index].quantity = newQuantity; // Asumiendo que Product tiene un campo 'quantity'
    this.cartSubject.next(this.items);
  }

  getItems() {
    return this.cartSubject.asObservable();
  }

  getTotal() {
    return this.items.reduce((acc, product) => acc + (product.price * product.quantity), 0);
  }
}
