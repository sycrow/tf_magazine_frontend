import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { ImageUtilService } from './image-util.service';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { ClientDTO } from '../../models/client.dto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    public http: HttpClient,
    public storage : StorageService,
    public imageUtilService : ImageUtilService
  ) { }

  findByEmail(email : string) {

    return this.http.get(
      `${API_CONFIG.baseUrl}/clientes/email?value=${email}`
    );

  }

  findById(id : string) {

    return this.http.get(
      `${API_CONFIG.baseUrl}/clientes/${id}`
    );

  }

  getImageFromBucket(id : string) : Observable<any> {

    let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`;
    return this.http.get(url, {responseType : 'blob'});

  }

  insert(obj : ClientDTO) {

    return this.http.post(
      `${API_CONFIG.baseUrl}/clientes`,
      obj,
      {
        observe : 'response',
        responseType : 'text'
      }
    );

  }

  uploadPicture(picture) {

    let pictureBlob = this.imageUtilService.dataUriToBlob(picture);
    let formData : FormData = new FormData();

    return this.http.post(
      `${API_CONFIG.baseUrl}/clientes/picture`,
      formData,
      {
        observe : 'response',
        responseType : 'text'
      }
    )

  }

}
