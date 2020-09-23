import { CategoryDTO } from './../../models/category.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from "../../config/api.config";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  id: string;

  constructor(
    public http : HttpClient) { }

  findAll() : Observable<CategoryDTO[]> {

    return this.http.get<CategoryDTO[]>(`${API_CONFIG.baseUrl}/categorias`);

  }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

}
