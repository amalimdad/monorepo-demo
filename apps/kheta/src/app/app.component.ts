import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="app-container">
      <header>
        <h1>Kheta Admin</h1>
        <nav>
          <a routerLink="/">Dashboard</a>
          <a routerLink="/products">Manage Products</a>
          <a routerLink="/orders">Process Orders</a>
          <a routerLink="/analytics">Analytics</a>
        </nav>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
    }
    nav {
      display: flex;
      gap: 20px;
    }
    a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
    }
    a:hover {
      color: #007bff;
    }
  `]
})
export class AppComponent {
  title = 'kheta';
}

export enum AppSizeEnum {
  'sm' = "small",
  'md' = "medium",
  'lg' = "large",
  'xl' = "extra-large",
}
