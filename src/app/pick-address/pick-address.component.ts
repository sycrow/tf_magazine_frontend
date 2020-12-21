import { RequestService } from './../../services/domain/request.service';
import { CartService } from './../../services/domain/cart.service';
import { RequestDTO } from './../../models/request.dto';
import { AddressDTO } from './../../models/address.dto';
import { ClientService } from './../../services/domain/client.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ClientDTO } from 'src/models/client.dto';

@Component({
  selector: 'app-pick-address',
  templateUrl: './pick-address.component.html',
  styleUrls: ['./pick-address.component.css']
})
export class PickAddressComponent implements OnInit {

  items: AddressDTO;
  request: RequestDTO;

  constructor(
    public auth: AuthService,
    public router: Router,
    public clientService: ClientService,
    public cartService: CartService,
    public requestService: RequestService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    let localUser = JSON.parse(localStorage['localUser']);

    
    this.clientService.findByEmail(localUser.email).subscribe(response => {
      this.items = response['adresses'];

      let cart = this.cartService.getCart();

      this.request = {
        cliente: {id: response['id']},
        enderecoDeEntrega: null,
        pagamento: null,
        itens: cart.items.map(x => { return {quantidade: x.quantidade, produto: {id: x.product.id}}})
      }

    },
    error => {
      if (error.status == 403) {
        this.router.navigate(['/']);
        console.log(error)
      }
      console.log(error)
    });

  }

  nextPage(item: AddressDTO) {

    this.request.enderecoDeEntrega = {id: item[0].id};
    this.requestService.setRequest(this.request);
    this.router.navigate(['paymentPage'])

  }

}
