import { StorageService } from './../../services/storage.service';
import { Router } from '@angular/router';
import { CredentialsDTO } from './../../models/credentials.dto';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: CredentialsDTO = {
    email: "",
    password: ""
  }

  constructor(
    public auth: AuthService,
    public router: Router,
    public storageService: StorageService
  ) { }

  ngOnInit() {
    if (this.auth.authenticated() == true) {
      this.router.navigate(['/'])
    }
  }

  login() {
    this.auth.login(this.creds).subscribe(
      data => {
        localStorage['token'] = data['data']['token'];
        const userData = JSON.parse(atob(data['data']['token'].split('.')[1]));
      
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }

  createAnAccount() {
    this.router.navigate(['/createAnAccount']);
  }

}
