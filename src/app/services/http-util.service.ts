import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor() { }

  headers() {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (localStorage['token']) {
      httpHeaders = httpHeaders.set(
        'Authorization', 'Bearer ' + localStorage['token']
      );
    }

    return { headers: httpHeaders }
  }
}
