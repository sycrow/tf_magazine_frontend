import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestDTO } from '../../models/request.dto';
import { API_CONFIG } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http : HttpClient) { }

  insert(obj : RequestDTO) {

    return this.http.post(
      `${API_CONFIG.baseUrl}/pedidos`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );

  }
}
