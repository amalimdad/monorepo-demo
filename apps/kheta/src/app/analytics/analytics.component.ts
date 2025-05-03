import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="analytics">
      <h2>Analytics Dashboard</h2>
      <div class="analytics-grid">
        <div class="chart-card">
          <h3>Sales Overview</h3>
          <div class="chart-placeholder">
            <!-- Chart would be implemented here -->
            <p>Sales chart visualization</p>
          </div>
        </div>
        <div class="chart-card">
          <h3>Top Products</h3>
          <div class="chart-placeholder">
            <!-- Chart would be implemented here -->
            <p>Top products visualization</p>
          </div>
        </div>
        <div class="stats-card">
          <h3>Key Metrics</h3>
          <div class="metric">
            <span class="label">Total Revenue</span>
            <span class="value">$12,345</span>
          </div>
          <div class="metric">
            <span class="label">Orders Today</span>
            <span class="value">24</span>
          </div>
          <div class="metric">
            <span class="label">Average Order Value</span>
            <span class="value">$514.38</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .analytics {
      padding: 20px;
    }
    .analytics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .chart-card, .stats-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .chart-placeholder {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f8f9fa;
      border-radius: 4px;
      margin-top: 10px;
    }
    .metric {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    .metric:last-child {
      border-bottom: none;
    }
    .label {
      color: #666;
    }
    .value {
      font-weight: bold;
    }
  `]
})
export class AnalyticsComponent {}
