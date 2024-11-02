import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthModel } from '../models/auth.model';
import { UserModelDTO } from '../models/user.model';

import { switchMap, tap } from 'rxjs/operators';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api'

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string, username: string) {
    return this.http.post<AuthModel>(`${this.apiUrl}/login`, {email, password, username})
      .pipe(
        tap(response => this.tokenService.saveToken(response.access_token))
      );
  }

  getProfile() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenService.getToken()}`
    });

    return this.http.post<UserModelDTO>(`${this.apiUrl}/profile`, {}, { headers }).pipe(
      tap((user: UserModelDTO) => {
        // Guarda el user_id en localStorage
        localStorage.setItem('user_id', user.id.toString()); // Asegúrate de que user.id sea el valor correcto
        console.log('User ID guardado en localStorage:', user.id);
      })
    );
  }

  loginAndGet(email: string, password: string, username: string) {
    return this.login(email, password, username)
      .pipe(
        switchMap(() => this.getProfile()),
      )
  }
}
