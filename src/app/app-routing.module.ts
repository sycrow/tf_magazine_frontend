import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products/:id",
    component: ProdutoDetailComponent
  },
  {
    path: "products/categorias/:id",
    component: ProductsComponent
  },
  {
    path: "cart",
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
