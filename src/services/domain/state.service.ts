import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateDTO } from 'src/models/state.dto';
import { API_CONFIG } from 'src/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(public http : HttpClient) { }

  findAll() : Observable<StateDTO[]> {
    return this.http.get<StateDTO[]>(`${API_CONFIG.baseUrl}/estados`);
  }

}
