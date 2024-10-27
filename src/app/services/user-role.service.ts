import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import {UserRoleCollectionDTO, UserRoleModelDTO} from '../models/user-role.model';
import {CreateRoleDTO, UpdateRoleDTO} from '../models/user-role.model';
import { catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private apiUrl = 'http://localhost:8000/api/v1/user-role'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<UserRoleCollectionDTO>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El rol no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  create(dto: CreateRoleDTO){
    return this.http.post<UserRoleModelDTO>(this.apiUrl, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El rol no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  update(id: number, dto: UpdateRoleDTO){
    return this.http.put(`${this.apiUrl}/${id}`, dto).pipe(
      catchError((error: HttpErrorResponse) => {
      if (error.status === HttpStatusCode.InternalServerError) {
        return throwError('Algo esta fallando en el server');
      }
      if (error.status === HttpStatusCode.NotFound) {
        return throwError('El rol no existe');
      }
      if (error.status === HttpStatusCode.Unauthorized) {
        return throwError('No tienes permitido ingresar a esta URL');
      }
      return throwError('Ups algo salio mal');
    }))
  }

  delete(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El rol no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }
}
