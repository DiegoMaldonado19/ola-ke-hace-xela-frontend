import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserCollectionDTO} from '../models/user.model';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {NgForOf, NgIf} from '@angular/common';
import {EditUserComponent} from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatCard,
    MatButton,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgIf,
    EditUserComponent,
    NgForOf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  userCollection: UserCollectionDTO = { users: [] };
  showEditCard: boolean = false;
  selectedUser: number | null = null;

  constructor(
    private userService: UserService
  ){ }

  ngOnInit(): void{
    this.userService.getAll().subscribe( data => {
      this.userCollection = data;
    })
  }

  openEditCard(userId: number) {
    this.selectedUser = userId;
    this.showEditCard = true;
  }

  closeEditCard() {
    this.showEditCard = false;
    this.selectedUser = null;
  }

  handleEditSubmitted(event: {
    userId: number;
    email: string;
    password: string;
    role_id: number;
    cui: string;
    name: string;
    lastname: string;
    phone: string;
  }) { }

}
