import { Router } from '@angular/router';
import { ClientService } from './../../services/domain/client.service';
import { CartService } from './../../services/domain/cart.service';
import { AddressDTO } from './../../models/address.dto';
import { CartItem } from './../../models/cart-item';
import { RequestService } from './../../services/domain/request.service';
import { RequestDTO } from './../../models/request.dto';
import { Component, OnInit } from '@angular/core';
import { ClientDTO } from 'src/models/client.dto';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  request: RequestDTO;
  cartItems: CartItem[];
  client: ClientDTO;
  address: AddressDTO;
  codePedido: string;

  constructor(
    public requestService: RequestService,
    public cartService: CartService,
    public clientService: ClientService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.cartItems = this.cartService.getCart().items;

    this.clientService.findById(this.request.cliente.id).subscribe(response => {

      this.client = response as ClientDTO;
      this.address = this.findEndereco(this.request.enderecoDeEntrega.id, response['addresses']);

    },
    error => {
      console.log(error);
    });

  }

  private findEndereco(id: string, list: AddressDTO[]) : AddressDTO {
    
    let position = list.findIndex(x => x.id == id);
    return list[position];

  }

  total() {
    return this.cartService.total();
  }

  checkout() {

    this.requestService.insert(this.request).subscribe(response => {

      this.cartService.createOrClearCart();
      this.codePedido = this.extractId(response.headers.get('location'));

    },
    error => {
      if (error.status == 403) {

      }
    });

  }

  back() {
    this.router.navigate(['CartPage']);
  }

  home() {
    this.router.navigate(['HomePage']);
  }

  private extractId(location: string) : string {
    let position = location.lastIndexOf('/');
    return location.substring(position+1, location.length);
  }

}
