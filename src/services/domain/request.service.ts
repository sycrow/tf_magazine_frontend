import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestDTO } from '../../models/request.dto';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http : HttpClient) { }

  insert(obj : RequestDTO) {

    return this.http.post(
      `${env.baseUrl}pedidos`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );

  }
}
