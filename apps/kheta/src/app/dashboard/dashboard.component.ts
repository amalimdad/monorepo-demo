import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibButtonComponent } from '@monorepo-demo/shared-ui';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LibButtonComponent],
  template: `
    <div class="dashboard">
      <h2>Admin Dashboard</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Products</h3>
          <p class="number">42</p>
          <lib-button text="View Products" type="primary" routerLink="/products"></lib-button>
        </div>
        <div class="stat-card">
          <h3>Pending Orders</h3>
          <p class="number">7</p>
          <lib-button text="Process Orders" type="primary" routerLink="/orders"></lib-button>
        </div>
        <div class="stat-card">
          <h3>Today's Revenue</h3>
          <p class="number">$1,234</p>
          <lib-button text="View Analytics" type="primary" routerLink="/analytics"></lib-button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .number {
      font-size: 2em;
      font-weight: bold;
      color: #007bff;
      margin: 10px 0;
    }
  `]
})
export class DashboardComponent {}
