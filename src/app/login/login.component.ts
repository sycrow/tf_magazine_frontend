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
    this.ngOnEnter();
  }

  ngOnEnter() {
    this.auth.refreshToken().subscribe(response => {
      this.auth.successfullLogin(response.headers.get('Authorization'));
      

      console.log("jas");
    },
    error => {
      console.log(error)
    }
    );
  }

  login() {
    this.auth.authenticate(this.creds).subscribe(response => {
      this.auth.successfullLogin(response.headers.get('Authorization'));
      
      this.router.navigate(['/'])
    },
    error => {
      console.log(error)
    }
    );
  }

  createAnAccount() {
    this.router.navigate(['/createAnAccount']);
  }

}
