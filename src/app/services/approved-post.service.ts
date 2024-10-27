import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {
  ApprovedPostCollectionDTO,
  ApprovedPostModelDTO,
  CreateApprovedPostDTO,
  UpdateApprovedPostDTO
} from '../models/approved-post.model';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovedPostService {

  private apiUrl = 'http://localhost:8000/api/v1/postsApproved'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<ApprovedPostCollectionDTO>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('La publicacion aprobada no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  create(dto: CreateApprovedPostDTO){
    return this.http.post<ApprovedPostModelDTO>(this.apiUrl, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('La publicacion aprobada no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  update(id: number, dto: UpdateApprovedPostDTO){
    return this.http.put(`${this.apiUrl}/${id}`, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('La publicacion aprobada no existe');
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
          return throwError('La publicacion aprobada no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }
}
