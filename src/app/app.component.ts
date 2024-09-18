import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'me-health-external-site';
}
