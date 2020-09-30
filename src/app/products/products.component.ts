import { CategoryService } from './../../services/domain/category.service';
import { ProductDTO } from './../../models/product.dto';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/domain/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  items: ProductDTO[] = [];
  page: number = 0;
  item: ProductDTO;

  constructor(
    public produtoService : ProductService,
    public http: HttpClient,
    public categoryService: CategoryService,
    public router: Router
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

  readProduct(id: string) {

    this.router.navigate(['/products/'+id]);
    this.produtoService.setId(id);

  }

}
