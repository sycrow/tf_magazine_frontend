import { StorageService } from './../services/storage.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public auth: AuthService,
    public router: Router,
    public storage: StorageService
  ) { }
  
  ngOnInit() {
  }

}
