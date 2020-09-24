import { ProductService } from './../../services/domain/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/models/product.dto';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  product: ProductDTO;

  constructor(
    public produtoService: ProductService
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

}
