import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products/products.component';
import { ProduploadComponent } from './products/produpload/produpload.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent, canActivate:[AuthGuardGuard]},
  { path:  'product', component:  ProduploadComponent, canActivate:[AuthGuardGuard] },
  { path: 'LogOut',redirectTo: '/home',pathMatch: 'full'},
  { path: '**', component:  PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
