import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpStatusCode} from '@angular/common/http';
import {CreateReportDTO, ReportCollectionDTO, ReportModelDTO, UpdateReportDTO} from '../models/report.model';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'http://localhost:8000/api/v1/report'

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get<ReportCollectionDTO>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El reporte no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  create(dto: CreateReportDTO){
    return this.http.post<ReportModelDTO>(this.apiUrl, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El reporte no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  update(id: number, dto: UpdateReportDTO){
    return this.http.put(`${this.apiUrl}/${id}`, dto).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.InternalServerError) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El reporte no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No tienes permitido ingresar a esta URL');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  delete(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === HttpStatusCode.InternalServerError) {
        return throwError('Algo esta fallando en el server');
      }
      if (error.status === HttpStatusCode.NotFound) {
        return throwError('El reporte no existe');
      }
      if (error.status === HttpStatusCode.Unauthorized) {
        return throwError('No tienes permitido ingresar a esta URL');
      }
      return throwError('Ups algo salio mal');
    }))
  }
}
