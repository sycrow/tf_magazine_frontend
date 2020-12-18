import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from './../../environments/environment';
import { Observable } from 'rxjs';
import { CityDTO } from '../../models/city.dto';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(public http: HttpClient) { }

  findAll(state_id: string) : Observable<CityDTO[]> {
    return this.http.get<CityDTO[]>(`${env.baseUrl}estados/${state_id}/cidades`);
  }
}
