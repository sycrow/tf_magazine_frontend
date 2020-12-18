import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialsDTO } from './../models/credentials.dto';
import { environment as env } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartService } from './domain/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();
  private readonly PATH: string = 'auth';

  constructor(
    public http: HttpClient,
    public storage: StorageService,
    public cartService: CartService,
    public router: Router
  ) { }

  login(login: CredentialsDTO): Observable<any> {

    return this.http.post(env.baseUrl + this.PATH, login);
  }

  refreshToken() {
    return this.http.post(env.baseUrl + this.PATH, "/refresh")
  }

  logout() {
    delete localStorage['token'];
    this.router.navigate(['/']);
  }

  authenticated(): boolean {
    if(localStorage['token'] == null) {
      return false;
    } else {
      return true;
    }
  }

  /*authenticate(creds: CredentialsDTO) {
    return this.http.post(`${env.baseUrl}/login`, creds,
    {
      observe: 'response',
      responseType: 'text'
    })
  }

  

  successfullLogin(authorizationValue: string) {
    let tok = authorizationValue.substring(7);
    let user : LocalUser = {
      token: tok,
      email: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
    this.cartService.createOrClearCart();
  }*/

}
