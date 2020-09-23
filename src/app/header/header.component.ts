import { API_CONFIG } from './../../config/api.config';
import { CategoryDTO } from './../../models/category.dto';
import { Observable } from 'rxjs';
import { ProductService } from './../../services/domain/product.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/domain/category.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductDTO } from 'src/models/product.dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bucketUrl : string = API_CONFIG.bucketBaseUrl;

  items : CategoryDTO[];

  category : CategoryDTO;

  page : number = 0;

  constructor(
    public categoryService : CategoryService,
    private router: Router,
    public produtoService : ProductService,
    public http : HttpClient
    ) { }

  ngOnInit() {
    this.categoryService.findAll().subscribe(response => {
      this.items = response;
      console.log(this.items)
    },
    err => {

    });
  }

  clickCategory(id: string) {

    const url = `${API_CONFIG.baseUrl}/categorias/${id}`;
    console.log(url);

  }
}
