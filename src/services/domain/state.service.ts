import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateDTO } from 'src/models/state.dto';
import { environment as env } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(public http : HttpClient) { }

  findAll() : Observable<StateDTO[]> {
    return this.http.get<StateDTO[]>(`${env.baseUrl}estados`);
  }

}
