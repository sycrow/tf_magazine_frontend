import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { ClientService } from './../../services/domain/client.service';
import { StateService } from './../../services/domain/state.service';
import { CityService } from './../../services/domain/city.service';
import { CityDTO } from './../../models/city.dto';
import { StateDTO } from './../../models/state.dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup: FormGroup;
  estados: StateDTO[];
  cidades: CityDTO[];

  constructor(
    public formBuilder: FormBuilder,
    public cityService: CityService,
    public stateService: StateService,
    public clientService: ClientService,
    public router: Router,
    public auth: AuthService
  ) { 

    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email]],
      type: ['', [Validators.required]],
      cpfOuCnpj: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(16)]],
      password: ['', [Validators.required]],
      publicPlace: ['', [Validators.required]],
      number: ['', [Validators.required]],
      complement: ['', []],
      neighborhood: ['', []],
      cep: ['', [Validators.required]],
      telefone1: ['', Validators.required],
      telefone2: ['', []],
      stateId: [null, [Validators.required]],
      cityId: [null, [Validators.required]]
    })

  }

  ngOnInit() {
    if (this.auth.authenticated() == true) {
      this.router.navigate(['/'])
    } else {
      this.stateService.findAll().subscribe(response => {
        this.estados = response;
        this.formGroup.controls.stateId.setValue(this.estados[0].id);
        this.updateCidades();
      },
      error => {
        console.log(error)
      })
    }
    
  }

  updateCidades() {
    let estado_id = this.formGroup.value.stateId;

    this.cityService.findAll(estado_id).subscribe(response => {
      this.cidades = response;
      this.formGroup.controls.cityId.setValue(null);
    },
    error => {
      console.log(error)
    })
  }

  signup() {
    this.clientService.insert(this.formGroup.value).subscribe(response => {
      console.log('Cadastro efetuado com sucesso');
      this.loginPage();
    },
    error => {
      console.log(error)
    })
  }

  loginPage() {
    this.router.navigate(['/login'])
  }

}
