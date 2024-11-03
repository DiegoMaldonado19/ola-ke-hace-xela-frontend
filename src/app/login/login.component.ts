import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {UserModelDTO} from '../models/user.model';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  profile: UserModelDTO | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  onSubmit() {
      if (this.loginForm.valid) {
        const { email, password, username } = this.loginForm.value;
        this.authService.loginAndGet(email, password, username).subscribe(
          profile => {
            this.profile = profile;
            localStorage.setItem('user_id', String(this.profile.id));
            localStorage.setItem('user_name', String(this.profile.name));
            localStorage.setItem('user_lastname', String(this.profile.lastname));
            localStorage.setItem('username', String(this.profile.username));
            localStorage.setItem('role_name', String(this.profile.role.role_name));
            console.log('Login successful, profile:', profile);
            this.router.navigate(['']);
          },
          error => {
            console.error('Login failed', error);
            this.router.navigate(['']);
          }
        );
      }
    }
}
