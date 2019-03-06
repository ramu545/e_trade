import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/servivces/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(private productServices:ProductsService,private router : Router) { }

  ngOnInit() {
    // this.productServices.getproducts().subscribe((res)=>{
    //   console.log(res);
    // },(err)=>{
    //   console.log(err);
    // });
  }
  prodform(){
    this.router.navigate(['/products/product']);
  }
}
