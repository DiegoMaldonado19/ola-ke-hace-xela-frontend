import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterOutlet } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { NotificationCollectionDTO } from '../models/notification.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbar,
    MatButton,
    MatIconModule,
    MatCardModule,
    RouterOutlet
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;
  notificationCollection: NotificationCollectionDTO = { notifications: [] };
  userId = 1;
  showNotifications: boolean = false;

  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('user_id');
    if (this.isLoggedIn) {
      this.loadNotifications();
    }
  }

  loadNotifications() {
    this.userId = Number(localStorage.getItem('user_id'));
    this.notificationService.getNotificationByUserId(this.userId).subscribe(data => {
      this.notificationCollection = data;
    });
  }

  markAllAsRead() {
    this.notificationService.markAllAsRead(this.userId).subscribe(() => {
      this.loadNotifications();
    });
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
