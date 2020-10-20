import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PickAddressComponent } from './pick-address/pick-address.component';
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
    path: "login",
    component: LoginComponent
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
  },
  {
    path: "pickAddress",
    component: PickAddressComponent
  },
  {
    path: "createAnAccount",
    component: SignupComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
