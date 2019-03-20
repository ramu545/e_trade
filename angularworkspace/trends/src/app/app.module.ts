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
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
//import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProduploadComponent } from './products/produpload/produpload.component';
import { ProductsService } from './services/products.service';
import { HttpIntersepterService } from './services/http-intersepter.service';
import { Userpipe } from './pipes/userpipe.pipe';
import { FilterPipe } from './products/products/filter.pipe';
import { TestDirective } from './testdirective.directive';

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
    ProduploadComponent,
    Userpipe,
    FilterPipe,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntersepterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
