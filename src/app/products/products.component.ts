import { CategoryService } from './../../services/domain/category.service';
import { API_CONFIG } from './../../config/api.config';
import { CategoryDTO } from './../../models/category.dto';
import { ProductDTO } from './../../models/product.dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/domain/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: ProductDTO[] = [];
  page: number = 0;

  constructor(
    public produtoService : ProductService,
    public http: HttpClient,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    const id = this.categoryService.getId();
    
    return this.produtoService.findByCategoria(id, this.page, 10).subscribe(response => {
      this.items = this.items.concat(response['content']);
    },
    error => {
      console.log(error);
    })

  }

}
