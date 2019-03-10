import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-bottomnav',
  templateUrl: './bottomnav.component.html',
  styleUrls: ['./bottomnav.component.css']
})
export class BottomnavComponent implements OnInit {
  message:string;
  constructor(private authserve:AuthService,private productServices:ProductsService) { }

  ngOnInit() { 
    this.productServices.getproducts().subscribe(message => { this.message = message.name; });
  }
  
}