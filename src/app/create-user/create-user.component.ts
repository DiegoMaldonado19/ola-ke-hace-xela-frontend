import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgIf} from "@angular/common";
import {UserService} from '../services/user.service';
import {CreateUserDTO} from '../models/user.model';
import {UserRoleCollectionDTO} from '../models/user-role.model';
import {UserRoleService} from '../services/user-role.service';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatError,
        MatFormField,
        MatInput,
        MatLabel,
        MatOption,
        MatSelect,
        NgIf,
        ReactiveFormsModule,
        RouterOutlet,
    ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
    createUserForm: FormGroup;

    newUser: CreateUserDTO | null = null;

    roleCollection: UserRoleCollectionDTO | null = null;

    constructor(
      private fb: FormBuilder,
      private userService: UserService,
      private roleService: UserRoleService,
      private router: Router
    ){
      this.createUserForm = this.fb.group({
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

    ngOnInit(): void{
      this.roleService.getAll().subscribe(data => {
        this.roleCollection = data;
      })
    }

    onSubmit(){
      const formValues = this.createUserForm.value;

      this.newUser = {
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
        role_id: formValues.role,
        cui: formValues.cui,
        name: formValues.name,
        lastname: formValues.lastname,
        phone: formValues.phone
      }

      this.userService.create(this.newUser).subscribe(
        response => {
          console.log('Usuario creado con exito: ', response);
          this.router.navigate(['']);
        },
        error => {
          console.error('Error al crear nuevo usuario: ', error);
          this.router.navigate(['']);
        }
      )
    }
}
