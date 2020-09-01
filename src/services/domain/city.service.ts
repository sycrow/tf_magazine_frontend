import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../config/api.config';
import { Observable } from 'rxjs';
import { CityDTO } from '../../models/city.dto';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(public http: HttpClient) { }

  findAll(state_id: string) : Observable<CityDTO[]> {
    return this.http.get<CityDTO[]>(`${API_CONFIG.baseUrl}/estados/${state_id}/cidades`);
  }
}
