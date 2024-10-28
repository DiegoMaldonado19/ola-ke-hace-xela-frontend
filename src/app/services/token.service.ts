import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    console.log(localStorage.getItem('token'));
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  getBody() {
    const body = {
      token: this.getToken() // Incluyendo el token en el cuerpo
    };

    return body;
  }

}
