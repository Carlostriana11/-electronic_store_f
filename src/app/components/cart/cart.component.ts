import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getItems().subscribe(items => {
      this.cartItems = items;
      this.cartTotal = this.cartService.getTotal();
    });
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }

  updateQuantity(index: number) {
    const newQuantity = this.cartItems[index].quantity;
    this.cartService.updateQuantity(index, newQuantity);
  }
}
