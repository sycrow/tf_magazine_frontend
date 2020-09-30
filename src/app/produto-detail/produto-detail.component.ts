import { CartService } from './../../services/domain/cart.service';
import { CategoryService } from './../../services/domain/category.service';
import { ProductService } from './../../services/domain/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/models/product.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  product: ProductDTO;

  constructor(
    public produtoService: ProductService,
    public categoryService: CategoryService,
    public cartService: CartService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    const id = this.produtoService.getId();

    return this.produtoService.findById(id).subscribe(response => {
      this.product = response;
    }, error => {
      console.log(error)
    })

  }

  addToCart(produto: ProductDTO) {
    
    this.cartService.addProduct(produto);
    this.router.navigate(['/cart']);

  }

  comeBack() {
    const id = this.categoryService.getId();

    this.router.navigate(['/products/categorias/'+id]);
  }

}
