import { Routes } from '@angular/router';
import { LibProductsComponent } from '@monorepo-demo/products';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'products',
    component: LibProductsComponent
  },
  {
    path: 'orders',
    loadComponent: () => import('./order-management/order-management.component').then(m => m.OrderManagementComponent)
  },
  {
    path: 'analytics',
    loadComponent: () => import('./analytics/analytics.component').then(m => m.AnalyticsComponent)
  }
];
