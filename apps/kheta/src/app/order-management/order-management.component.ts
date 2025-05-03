import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibButtonComponent } from '@monorepo-demo/shared-ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule, LibButtonComponent, FormsModule],
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  statusFilter = 'all';
  orders = [
    { id: 1001, customer: 'John Doe', total: 99.99, date: '2024-03-20', status: 'pending' },
    { id: 1002, customer: 'Jane Smith', total: 149.99, date: '2024-03-19', status: 'processing' },
    { id: 1003, customer: 'Bob Johnson', total: 79.99, date: '2024-03-18', status: 'completed' }
  ];

  viewOrderDetails(order: any) {
    console.log('Viewing order details:', order);
  }

  processOrder(order: any) {
    console.log('Processing order:', order);
  }
}
