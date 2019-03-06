import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './header/topnav/topnav.component';
import { BottomnavComponent } from './header/bottomnav/bottomnav.component';
import { TopfooterComponent } from './footer/topfooter/topfooter.component';
import { BottomfooterComponent } from './footer/bottomfooter/bottomfooter.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { HomeComponent } from './home/home/home.component';
import { ProductsComponent } from './products/products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './servivces/products.service';
import { ProduploadComponent } from './products/produpload/produpload.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BottomnavComponent,
    TopfooterComponent, 
    BottomfooterComponent,
    PagenotFoundComponent,
    HomeComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    ProduploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
