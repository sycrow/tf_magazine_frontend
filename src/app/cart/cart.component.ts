import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/domain/cart.service';
import { ProductService } from './../../services/domain/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/models/product.dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[];
  products: ProductDTO;

  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.loadData();
    let cart = this.cartService.getCart();
    this.items = cart.items;
  }

  loadData() {

    const id = this.productService.getId();

    return this.productService.findById(id).subscribe(response => {
      this.products = response;
    },error=>{
      console.log(error)
    });

  }

  subtotal(produto: ProductDTO) {
    return this.cartService.total();
  }

}
