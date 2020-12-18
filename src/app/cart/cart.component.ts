import { AuthService } from './../../services/auth.service';
import { CredentialsDTO } from './../../models/credentials.dto';
import { CategoryService } from './../../services/domain/category.service';
import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/domain/cart.service';
import { ProductService } from './../../services/domain/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/models/product.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[];
  product: ProductDTO;
  cres: CredentialsDTO = {
    email: "",
    password: ""
  }

  constructor(
    public productService: ProductService,
    public cartService: CartService,
    public router: Router,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {

    let cart = this.cartService.getCart();
    this.items = cart.items;
  }

  subtotal(produto: ProductDTO) {
    return this.cartService.total();
  }

  removeItem(produto: ProductDTO) {
    this.items = this.cartService.removeProduct(produto).items;
  }

  increaseQuantity(product: ProductDTO) {
    this.items = this.cartService.increaseQuantity(product).items;
  }

  decreaseQuantity(product: ProductDTO) {
    this.items = this.cartService.decreaseQuantity(product).items;
  }

  goOn() {
    
    this.router.navigate(['/']);
    
  }

  checkout() {
    if (this.cartService.total() == 0) {
      alert("Você precisa colocar um ou mais itens no carrinho para prosseguir. Clique em 'Comprar mais produtos' ou clique em um dos itens de categorias")
      this.router.navigate(['/cart'])
    } else {
      this.router.navigate(['/pickAddress']);
    }
    
    
  }

}
