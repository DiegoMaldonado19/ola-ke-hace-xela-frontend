import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbar,
    MatButton,
    RouterOutlet
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('user_id');
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
