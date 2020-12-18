import { AuthService } from 'src/services/auth.service';
import { CartService } from './../../services/domain/cart.service';
import { StorageService } from './../../services/storage.service';
import { API_CONFIG } from './../../config/api.config';
import { CategoryDTO } from './../../models/category.dto';
import { ProductService } from './../../services/domain/product.service';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/domain/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    public http : HttpClient,
    public storage: StorageService,
    public cartService: CartService,
    public route: ActivatedRoute,
    public auth: AuthService
    ) { 
      
    }

  ngOnInit() {
    this.categoryService.findAll().subscribe(response => {
      this.items = response;
    },
    err => {
      console.log(err);
    });
  }

  clickCategory(id: string) {
    
    this.router.navigate(['/products/categorias/'+id]);
  }

  logout() {
    this.auth.logout();
  }

  numTotal() {
    
    let num = this.cartService.getCart();

    return num.items.length;
  }
}
