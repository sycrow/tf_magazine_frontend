import { HttpUtilService } from './../../app/services/http-util.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { ImageUtilService } from './image-util.service';
import { environment as env } from './../../environments/environment';
import { Observable } from 'rxjs';
import { ClientDTO } from '../../models/client.dto';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    public http: HttpClient,
    public storage : StorageService,
    public imageUtilService : ImageUtilService,
    public httpUtil: HttpUtilService
  ) { }

  findByEmail(email : string): Observable<any> {

    return this.http.get(
      `${env.baseUrl}clientes/email?value=${email}`, this.httpUtil.headers());

  }

  findById(id : string) {

    return this.http.get(
      `${env.baseUrl}clientes/${id}`, this.httpUtil.headers()
    );

  }

  getImageFromBucket(id : string) : Observable<any> {

    let url = `${env.bucketBaseUrl}cp${id}.jpg`;
    return this.http.get(url, {responseType : 'blob'});

  }

  insert(obj : ClientDTO) {

    return this.http.post(
      `${env.baseUrl}clientes`,
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
      `${env.baseUrl}clientes/picture`,
      formData,
      {
        observe : 'response',
        responseType : 'text'
      }
    )

  }

}
