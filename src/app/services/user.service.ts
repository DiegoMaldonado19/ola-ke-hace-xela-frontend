import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {CreateUserDTO, UpdateUserDTO, UserCollectionDTO, UserModelDTO} from '../models/user.model';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000/api/v1/user'
  private apiUrl1 = 'http://localhost:8000/api/register'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<UserCollectionDTO[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El usuario no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  create(dto: CreateUserDTO){
    return this.http.post<UserModelDTO>(this.apiUrl, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El usuario no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  registerUser(dto: CreateUserDTO){
    return this.http.post<UserModelDTO>(this.apiUrl1, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El usuario no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  update(id: number, dto: UpdateUserDTO){
    return this.http.put(`${this.apiUrl}/${id}`, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El usuario no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  delete(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El usuario no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }
}
