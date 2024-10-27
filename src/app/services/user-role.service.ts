import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserRoleCollectionDTO} from '../models/user-role.model';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private apiUrl = 'http://localhost:8000/api/v1/user-role'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<UserRoleCollectionDTO[]>(this.apiUrl);
  }
}
