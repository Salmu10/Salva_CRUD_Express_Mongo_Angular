import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Furniture } from '../models/furniture.model';

const baseUrl = 'http://localhost:8080/api/furnitures';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(baseUrl);
  }

  get(id: any): Observable<Furniture> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(`${baseUrl}?title=${title}`);
  }
}
