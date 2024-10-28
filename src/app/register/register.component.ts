import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {CreateUserDTO} from '../models/user.model';
import {UserService} from '../services/user.service';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        MatError,
        MatFormField,
        MatInput,
        MatLabel,
        NgIf,
        ReactiveFormsModule,
        RouterOutlet,
        MatButtonModule
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  newUser: CreateUserDTO | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      cui: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password, username, role, cui, name, lastname, phone } = this.registerForm.value;

      this.newUser = {
        username: username,
        email: email,
        password: password,
        role_id: role,
        cui: cui,
        name: name,
        lastname: lastname,
        phone: phone
      }

      this.userService.registerUser(this.newUser).subscribe(
        response => {
          console.log('Usuario registrado con éxito:', response);
          this.router.navigate(['']);
        },
        error => {
          console.error('Error al registrar el usuario:', error);
          this.router.navigate(['']);
        }
      );

    }
  }

}
