import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibButtonComponent } from '@monorepo-demo/shared-ui';
@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule, LibButtonComponent],
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent {
  orders = [
    { id: 1001, date: '2024-03-20', total: 99.99, status: 'Delivered' },
    { id: 1002, date: '2024-03-19', total: 149.99, status: 'Processing' },
    { id: 1003, date: '2024-03-18', total: 79.99, status: 'Delivered' }
  ];
}
