import { environment as env } from './../../environments/environment';
import { CategoryDTO } from './../../models/category.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  id: string;

  constructor(
    public http : HttpClient) { }

  findAll() : Observable<CategoryDTO[]> {

    return this.http.get<CategoryDTO[]>(`${env.baseUrl}categorias`);

  }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

}
