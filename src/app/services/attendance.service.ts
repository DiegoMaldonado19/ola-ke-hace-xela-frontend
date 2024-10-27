import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {
  AttendanceCollectionDTO,
  AttendanceModelDTO,
  CreateAttendanceDTO,
  UpdateAttendanceDTO
} from '../models/attendance.model';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private apiUrl = 'http://localhost:8000/api/v1/attendance'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<AttendanceCollectionDTO>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('La asistencia no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  create(dto: CreateAttendanceDTO){
    return this.http.post<AttendanceModelDTO>(this.apiUrl, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('La asistencia no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  update(id: number, dto: UpdateAttendanceDTO){
    return this.http.put(`${this.apiUrl}/${id}`, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('La asistencia no existe');
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
          return throwError('La asistencia no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  getAllAttendancesByUsername(username: string){
    return this.http.get(`${this.apiUrl}/byUsername/${username}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('La asistencia no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  getAllAttendancesByPost(post_id: number){
    return this.http.get(`${this.apiUrl}/byPost/${post_id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('La asistencia no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }
}
