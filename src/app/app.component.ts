import { CategoryService } from './../services/domain/category.service';
import { StorageService } from './../services/storage.service';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { CategoryDTO } from 'src/models/category.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public router: Router,
    public categoryService: CategoryService,
    public route: ActivatedRoute,
    public auth: AuthService
  ) {
    
   }
  
  ngOnInit() {
    this.auth.refreshToken();
  }

  

}
