import { RequestService } from './../../services/domain/request.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestDTO } from './../../models/request.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  request: RequestDTO;

  parcelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  form: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public requestService: RequestService
  ) { 

    this.form = this.formBuilder.group({
      numeroDeParcelas: [1, Validators.required],
      "@type": ["pagamentoComCartao", Validators.required]
    })

  }

  ngOnInit() {
  }

  nextPage() {
    this.request = this.requestService.getRequest();
    this.request.pagamento = this.form.value;
    this.router.navigate(['orderConfirmationPage'])
  }

}
