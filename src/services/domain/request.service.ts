import { RequestDTO } from './../../models/request.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  request: RequestDTO;

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

  setRequest(req: RequestDTO) {
    this.request = req;
  }

  getRequest() {
    return this.request;
  }

}
