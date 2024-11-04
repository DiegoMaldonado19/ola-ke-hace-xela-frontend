import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {UpdateUserDTO, UserModelDTO} from '../models/user.model';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
    @Input() userId: number = 0;
    @Output() closeCard = new EventEmitter<void>();
    @Output() editSubmitted = new EventEmitter<{
      userId: number;
      email: string;
      password: string;
      role_id: number;
      cui: string;
      name: string;
      lastname: string;
      phone: string;
    }>();

    editForm: FormGroup;


    constructor(
      private userService: UserService,
      private fb: FormBuilder
    ){
      this.editForm = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        role: ['', Validators.required],
        cui: ['', Validators.required],
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', Validators.required]
      })
    }

    onSubmit(){

      if(this.editForm.valid){
        const { email, password, username, role, cui, name, lastname, phone } = this.editForm.value;

        const userUpdated: UpdateUserDTO = {
          username: username,
          email: email,
          password: password,
          role_id: role,
          cui: cui,
          name: name,
          lastname: lastname,
          phone: phone
        }

        this.userService.update(this.userId, userUpdated).subscribe(
          (response) => {
            console.log('Usuario actualizado', response);
            this.editSubmitted.emit({
              userId: this.userId!,
              email: email,
              password: password,
              role_id: role,
              cui: cui,
              name: name,
              lastname: lastname,
              phone: phone
            });
            this.close();
          },
          (error) => {
            console.log('Error al actualizar el usuario: ', error);
          }
        )

      }
    }

    close(){
      this.closeCard.emit();
    }
}
