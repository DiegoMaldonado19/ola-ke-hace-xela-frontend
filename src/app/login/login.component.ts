import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {UserModelDTO} from '../models/user.model';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  profile: UserModelDTO | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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
            console.log('Login successful, profile:', profile);
          },
          error => {
            console.error('Login failed', error);
          }
        );
      }
    }
}
