import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibButtonComponent } from '@monorepo-demo/shared-ui';
import {LibProductsComponent} from '@monorepo-demo/products'
@Component({
  selector: 'lib-orders',
  standalone: true,
  imports: [CommonModule, LibButtonComponent, LibProductsComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  cartItems: { name: string; price: number }[] = [];

  addToCart(product: { name: string; price: number }) {
    this.cartItems.push(product);
  }

  removeFromCart(item: { name: string; price: number }) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  checkout() {
    console.log('Checking out:', this.cartItems);
    this.cartItems = [];
  }
}
