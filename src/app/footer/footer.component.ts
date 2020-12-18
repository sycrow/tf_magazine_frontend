import { Router } from '@angular/router';
import { CategoryService } from './../../services/domain/category.service';
import { Component, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/models/category.dto';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  items: CategoryDTO[];

  constructor(
    public router: Router,
    public categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.findAll().subscribe(response => {
      this.items = response;
    },
    err => {
      console.log(err);
    });
  }

  clickCategory(id: string) {

    const url = `${API_CONFIG.baseUrl}/produtos/?categorias=${id}`;
    this.router.navigate(['/products/categorias/'+id]);
    this.categoryService.setId(id);

  }

}
