import { Routes } from '@angular/router';
import { OrdersComponent } from '@monorepo-demo/orders';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: OrdersComponent
  },
  {
    path: 'orders',
    loadComponent: () => import('./order-history/order-history.component').then(m => m.OrderHistoryComponent)
  }
];
