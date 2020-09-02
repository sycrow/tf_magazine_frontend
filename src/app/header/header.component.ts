import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/domain/category.service';
import { API_CONFIG } from 'src/config/api.config';
import { CategoryDTO } from 'src/models/category.dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bucketUrl : string = API_CONFIG.bucketBaseUrl;

  items : CategoryDTO[];

  constructor(public categoryService : CategoryService) { }

  ngOnInit() {
    this.categoryService.findAll().subscribe(response => {
      this.items = response;
    });
  }

  forCategory(category_id : string) {
    
  }

}
