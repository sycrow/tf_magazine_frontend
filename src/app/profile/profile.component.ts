import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { ClientService } from './../../services/domain/client.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ClientDTO } from 'src/models/client.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  client: ClientDTO;

  constructor(
    public storage: StorageService,
    public clientService: ClientService,
    public router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
    if (this.auth.authenticated() == true) {
      this.loadData();
    } else {
      this.router.navigate(['/'])
    }
    

  }

  loadData() {
    let localUser = JSON.parse(localStorage['localUser']);

    if (localUser && localUser.email) {
      this.clientService.findByEmail(localUser.email).subscribe(response => {
        this.client = response as ClientDTO;
      },
      error => {
        if (error.status == 403) {
          this.router.navigate(['/']);
          console.log(error)
        }
        console.log(error)
      });
    }
    else {
      this.router.navigate(['/'])
    }
  } 

}
