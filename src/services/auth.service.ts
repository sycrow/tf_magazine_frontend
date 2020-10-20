import { environment } from './../environments/environment';
import { CredentialsDTO } from './../models/credentials.dto';
import { API_CONFIG } from './../config/api.config';
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

  constructor(
    public http: HttpClient,
    public storage: StorageService,
    public cartService: CartService
  ) { }

  authenticate(creds: CredentialsDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds,
    {
      observe: 'response',
      responseType: 'text'
    })
  }

  refreshToken() {
    return this.http.post(`${API_CONFIG.baseUrl}/auth/refresh_token`,
    {},
    {
      observe: 'response',
      responseType: 'text'
    });
  }

  successfullLogin(authorizationValue: string) {
    let tok = authorizationValue.substring(7);
    let user : LocalUser = {
      token: tok,
      email: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
    this.cartService.createOrClearCart();
  }

  logout() {
    this.storage.setLocalUser(null);
  }

}
