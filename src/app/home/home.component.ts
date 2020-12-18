import { AuthService } from 'src/services/auth.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public storage: StorageService,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
