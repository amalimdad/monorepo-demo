import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibButtonComponent } from '@monorepo-demo/shared-ui';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, LibButtonComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Product 1', price: 19.99 },
    { name: 'Product 2', price: 29.99 },
    { name: 'Product 3', price: 39.99 }
  ];

  addToCart(product: { name: string; price: number }) {
    console.log('Adding to cart:', product);
    // Here you would typically emit an event or call a service
  }
}
