import { CategoryDTO } from './../../models/category.dto';
import { ProductDTO } from './../../models/product.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id: string;

  constructor(public http: HttpClient) { }

  findByCategoria(categoria_id: string, page: number=0, linesPerPage: number= 20) : Observable<ProductDTO[]> {

    return this.http.get<ProductDTO[]>(`${env.baseUrl}produtos/?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`);

  }

  getSmallImageFromBucket(id : string) : Observable<any> {

    let url = `${env.bucketBaseUrl}prod${id}-small.jpg`;
    return this.http.get(url, {responseType: 'blob'});

  }

  findById(produto_id: string) {

    return this.http.get<ProductDTO>(`${env.baseUrl}produtos/${produto_id}`);

  }

  getImageFromBucket(id : string) : Observable<any> {

    let url = `${env.bucketBaseUrl}prod${id}.jpg`;
    return this.http.get(url, {responseType: 'blob'});

  }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

}
